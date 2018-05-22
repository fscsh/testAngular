import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreated = false;
    serverCreationStatus = 'No server was created! ';
    serverName = 'test';
    servers = ['testServer','test222'];
  constructor() {
      setTimeout(()=>{
          this.allowNewServer = true;
      },2000)
  }
  ngOnInit() {
  }
  onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = `Server was created, server name is ${this.serverName}`
  }
  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value
  }
}
