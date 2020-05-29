export class AuditTrail {
constructor(
  public name:string,
  public deleteReason:string,
  public owner:string,
  public assigne:string,
  public startTime:string,
  public endTime:string,
  public priority:number,
  public due:string,
  public followUp:string,
  public processInstanceId:string
){}
}
