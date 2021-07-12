//brain of the app

import { Component } from '@angular/core';
import { Todo } from './todo';

//DECORATOR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'youtube-ang TESTING';
  // date = new Date();
  // name = 'Erum';

  // date = new Date();
  // name = 'Erum';
  todoValue!: string;
  list!: Todo[];

  //initalization
  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  // constructor(){
  //   console.log("c called")
  //   this.doSomething('erum')
  // }

  //customized method
  // doSomething(val:string) : void {
  //   val = "Awesome";
  // }
}
