import { Component, inject, OnInit } from "@angular/core";
import { TodoServiceService } from "../../@Services/todo-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  standalone: true,
  imports: [],
  providers: [TodoServiceService]
})

export class DashboardComponent implements OnInit {

  private todoService = inject(TodoServiceService);

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {

    this.todoService.getTodos()
  }
}
