import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'Offline';    

    constructor(){
        this.serverStatus = Math.random() > 0.6 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}