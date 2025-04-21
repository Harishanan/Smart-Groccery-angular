import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template : `<h1> Welcome, ?username? </h1>`,
  interpolation: ['?','?'],*/
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-groccery';

  public username ='Harishanan1';
}
