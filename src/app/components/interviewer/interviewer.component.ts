import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.css']
})
export class InterviewerComponent implements OnInit {

  task:any;
angForm:FormGroup;
  constructor(private fb: FormBuilder, private taskservice: TaskService,private router:Router) { 
  this.angForm = this.fb.group({
    feedback: ['', Validators.required],
    result: ['', Validators.required]
  }
  );
}

  ngOnInit() {
    this.task = history.state.task;
    Global.task = this.task
  }

  completeOne(){
    debugger;
    console.log(this.angForm.value);
    var formobj = this.setValue( this.angForm.value);
    this.angForm = undefined
    this.taskservice.submitForm(formobj,this.task.processInstanceId)
      .subscribe(res => {
      console.log("SuccessFully Saved ");
      }, error => {
        console.log('Add business failure');
      });
      this.gotoMyTask();
    }


    gotoMyTask(){
      Global.task=undefined;
      this.router.navigate(['my-tasks']);
    }
  
    completeTwo(){
     debugger;
      console.log(this.angForm.value);
      var formobj = this.setValueTwo( this.angForm.value);
      this.angForm = undefined
      this.taskservice.submitForm(formobj,this.task.processInstanceId)
        .subscribe(res => {
        console.log("SuccessFully Saved ");
        }, error => {
          console.log('Add business failure');
        });
        this.gotoMyTask();
      }


  setValue(angForm):any{
  var variable:any=  {
    "int1Feedback":{"type":"String","value":angForm.feedback,"valueInfo":{}},
    "int1Result":{"type":"String","value":angForm.result,"valueInfo":{}}
  }
    return variable;
    }

    setValueTwo(angForm){
      var variables={
      "int2Result":{"type":"Boolean","value":angForm.result,"valueInfo":{}},
      "Int2Feedback":{"type":"String","value":angForm.feedback,"valueInfo":{}}}
      return variables;
    }


}
