import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../SNES-bootstrap.css']
})
export class AppComponent {
  title = 'Todo List';
  name: string = 'Peyton';
}
