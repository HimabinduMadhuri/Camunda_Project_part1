import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allTasks:any;
  activeTab: any;
  task:any;
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.activeTab = 1;
    this.task=history.state.task;
    
    // this.getAllTasks();
    this.getGroupTasks();
  }

  getGroupTasks(){
    this.taskService.getGroupTasks().subscribe(
     (data) => this.allTasks = data
     );
   }

   setActiveTab(id) {
this.activeTab = id;
   }

}
