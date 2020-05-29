import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {


  constructor(private taskService:TaskService) { }
  
  allTasks:any;

  ngOnInit() {
    Global.task = undefined;
    // this.taskService
    //   .getAllTasks()
    //   .subscribe((data: Task[]) => {
    //     this.allTasks = data;
    // });
   this.getAllTasks();
  }

   getAllTasks(){
   this.taskService.getAllTasks().subscribe(
    (data) => this.allTasks = data
    );
  }
  


}
