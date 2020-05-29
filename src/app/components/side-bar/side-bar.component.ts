import { Global } from './../../global';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  task:any;
 
  ngOnInit() {
    if(history.state)
    this.task=history.state.task;
  }
 
 
}
