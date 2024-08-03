import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  @Input() productName: string | undefined
  @Input() productAmount: number | undefined
  public photos: any = []
  /**
   *
   */
  constructor(private client: HttpClient) {

  }
  ngOnInit(): void {
    this.client.get('https://jsonplaceholder.typicode.com/photos').subscribe(x => {
      this.photos = x
    })
    
  }
}
