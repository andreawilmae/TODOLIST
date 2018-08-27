import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	todos: string[] = [];
    todo: string;
	constructor(public navCtrl: NavController) {

  }

  add() {
  		if(this.todo !=""){
  			this.todos.push(this.todo);
  		}
        
  		this.todo = "";

    }
  
  delete(t) {
        var index = this.todos.indexOf(t, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

 

}
