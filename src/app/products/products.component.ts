import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products = [
  {id:1, name: 'Product 1', price: 100, color: 'blue', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
  {id:2, name: 'Product 2', price: 200, color: 'black', available: 'Not Available', image: '/assets/products/product-image-2.jpg'},
  {id:3, name: 'Product 3', price: 300, color: 'red', available: 'Available', image: '/assets/products/product-image-3.jpg'}, 
  {id:4, name: 'Product 4', price: 400, color: 'white', available: 'Not Available', image: '/assets/products/product-image-4.jpg'},
  {id:5, name: 'Product 5', price: 500, color: 'green', available: 'Available', image: '/assets/products/product-image-5.jpg'},
  {id:6, name: 'Product 6', price: 600, color: 'yellow', available: 'Not Available', image: '/assets/products/product-image-6.jpg'},
];  
 
}
