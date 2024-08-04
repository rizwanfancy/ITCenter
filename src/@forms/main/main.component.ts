import { Component } from '@angular/core';
import { HeadersComponent } from '../../@components/headers/headers.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../@components/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeadersComponent, RouterModule, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
