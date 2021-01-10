import { Component, OnInit } from '@angular/core';
import { Task } from './model/tasks.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public taskList : Task [] = [];

  addTask(){
  	this.taskList.push(new Task());
  }


  removeTask(index:number){
  	if(index>-1){
  		this.taskList.splice(index,1);
  	}
    
  }
}
