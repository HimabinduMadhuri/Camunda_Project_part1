import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-my-group-tasks',
  templateUrl: './my-group-tasks.component.html',
  styleUrls: ['./my-group-tasks.component.css']
})
export class MyGroupTasksComponent implements OnInit {
  groupTasks:any;

  

  constructor(private taskService:TaskService) { 

  }



  ngOnInit() {
    this.getGroupTasks();
    Global.task = undefined;
  }

  // getAllTasks():void{
  //   this.taskService.getAllTasks().subscribe(
  //     (data) => this.allTasks = data
  //   );
  // }
  getGroupTasks(){
    this.taskService.getGroupTasks().subscribe(
     (data) => this.groupTasks =data
     );
   }
   
  // specialTask(data){
  //   for(var i=0;i<data.length ; i++){
  //    data[i].processInstanceId = data[i].processInstanceId.split(":")[0] + ":" +  data[i].processInstanceId.split(":")[1]
  //   }
  //      this.allTasks = data;
  // }

   
}
