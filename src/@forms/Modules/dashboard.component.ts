import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from "@angular/core";
import { TodoServiceService } from "../../@Services/todo-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  standalone: true,
  imports: [],
  providers: [TodoServiceService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {

  public firstName = signal('Rizwan')
  public lastName = signal('Anwer')
  public fullName = computed(() => this.firstName() + " " + this.lastName())
  public students = signal<number[]>([])
  public student = signal([
    {
      Id: 1,
      Name: 'Ayan',
      Class: 'CIT'
    },
    {
      Id: 2,
      Name: 'Atif',
      Class: 'CIT'
    },
    {
      Id: 3,
      Name: 'Zain',
      Class: 'CIT'
    }])

  private todoService = inject(TodoServiceService);

  constructor() {

  }

  ngOnInit() {
    this.getTodos()
    for (let index = 0; index < 50; index++) {
      this.students.set([...this.students(), index])

    }
  }

  getTodos() {
    this.todoService.getTodos()
  }

  changeSignal() {
    let excludedValues = [1, 19, 31, 32, 49]
    let withOut31 = this.students().filter(o => excludedValues.includes(o))
    this.students.set(withOut31)
    this.firstName.set('Qasim')
    let newValue = this.student().find(o => o.Id === 2)
    if (newValue) {
      newValue.Class = 'IT'
      this.student.set([...this.student()])
    }


  }
}
