import { Component } from '@angular/core';
import { Todos } from './todos/todos';

@Component({
  imports: [Todos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}