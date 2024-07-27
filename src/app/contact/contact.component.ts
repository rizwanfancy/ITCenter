import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ContactListComponent } from "./contact-list/contact-list.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ContactListComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private router: Router) {

  }
  public showContactList() {
    this.router.navigateByUrl('/contact/list')
  }
}
