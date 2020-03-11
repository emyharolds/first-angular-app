import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //by attribute enclose the selector in []; 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName:string = 'TestServer';
  serverCreated = false;
  serverCreationStatus = 'No Server was created';
  username = '';
  servers = ['TestServer A', 'TestServer B'];
  showSecret =false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  onUpdateServerName(event: Event){
      this.serverCreated = true;
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onValidateUsername(){
    if(this.username.length === 0){
      return false;
    }

    return true;
  }

}
