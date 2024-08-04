import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [MatMenuModule, MatToolbarModule, MatIconModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent {

  public applicationName: string = ''
  public logo: any = ''
}
