import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
                  This website uses cookies to provide better user experience.
                  <div class="close"><button class="btn" (click)="closeNotification()">x</button></div>
            </div>`,
  styles: [".notification-div { margin: 50px 0px; padding: 10px 20px; Background-color: antiquewhite; text-align: center;}", "p{font-size: 14px}",
            ".close{float: right; margin-top: -15px; cursor: pointer;}", ".btn{border: none; background: none; color: #000; font-size: 20px;}", 
          ".fadeOut {visibility: hidden;opacity: 0; transition:visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {

  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
