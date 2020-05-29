import { Global } from './../../global';
import { MyGroupTasksComponent } from './../my-group-tasks/my-group-tasks.component';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  constructor(private taskService:TaskService , private router:Router) { 

  }

  allTasks:any;

  ngOnInit() {
    this.getAllTasks();
    Global.task = undefined;
  }

  // getAllTasks():void{
  //   this.taskService.getAllTasks().subscribe(
  //     (data) => this.allTasks = data
  //   );
  // }
  getAllTasks(){
    this.taskService.getAllTasks().subscribe(
     (data) => {
      this.allTasks =data;
     }
     );
   }
   
   
  
  // specialTask(data){
  //   for(var i=0;i<data.length ; i++){
  //    data[i].processDefinitionId = data[i].processDefinitionId.split(":")[0] + ":" +  data[i].processDefinitionId.split(":")[1]
  //   }
  //      this.allTasks = data;
  // }

}

