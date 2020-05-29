import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  createuri = 'http://localhost:8080/engine-rest/process-definition/key/InterviewTracker/start';

  constructor(private http: HttpClient) { }

  
  groupTasksUri = "http://localhost:8080/engine-rest/task?processDefinitionKeyIn=InterviewTracker ";

  schedule1="http://localhost:8080/camunda/api/engine/engine/default/task/";
  schedule1Form ="/form-variables?deserializeValues=false&variableNames=candidateName%2CcandidateID%2CcandidateInfo%2CjobDescription%2Cinterview1Date%2Cinterviewer1"
  

    userUri = "http://localhost:8080/engine-rest/task?processDefinitionKeyIn=InterviewTracker";
    profileUri = "http://localhost:8080/engine-rest/user/demo/profile" ;
    historyUri = "http://localhost:8080/engine-rest/history/task?processInstanceId=";
    caseInfoUri = "http://localhost:8080/engine-rest/process-instance/";
    auditTrailsUri = "http://localhost:8080/engine-rest/history/task?processInstanceId=";
     
  

  getAllTasks() {
    return this
           .http
           .get(`${this.userUri}`);
  }

  addTask(data) {
    return this.http.post(`${this.createuri}`, data);
  }

  submitForm(data,processInstanceId) {
    return this.http.post(`${this.schedule1+processInstanceId+"/submit-form"}`, {"variables":data});
  }

   getGroupTasks(){
     return this.http.get(`${this.groupTasksUri}`);
   }
  
   getScheduleOneForm(processInstanceId){
    return this.http.get(`${this.schedule1+processInstanceId+this.schedule1Form}`);
  }
    getProfiles(){
      return this.http.get(`${this.profileUri}`);
    }

     getHistory(processInstanceId){
       return this.http.get(`${this.historyUri+processInstanceId}`);

     }
     getCaseInfo(processInstanceId){
       return this .http.get(`${this.caseInfoUri+processInstanceId+"/variables"}`);
     }
    
     getAuditTrails(processInstanceId){
      return this .http.get(`${this.auditTrailsUri+processInstanceId}`);
    }


}
