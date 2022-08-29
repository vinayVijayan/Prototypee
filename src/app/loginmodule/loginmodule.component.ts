import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.css']
})
export class LoginmoduleComponent implements OnInit {
  usermodel:any
  userid:any
  Passwd:any
  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }
  confirm(){

  }
  getUserBranch(){
    debugger
if(this.electronService.isElectronApp){
this.requestbranchId()
}
  }
  
  requestbranchId() {
    this.electronService.ipcRenderer.send('branchId-Request', 'pingbranchId');
    console.log(this.electronService.ipcRenderer.send('branchId-Request', 'pingbranchId'))
  }

}
