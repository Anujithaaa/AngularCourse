import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan: string = 'Shop till you drop. Experience shopping like never before';
  source: string = '/assets/eshopping.jpg';
  
  getSlogan(){
    return 'This is a new slogan for this website';
  }
}
