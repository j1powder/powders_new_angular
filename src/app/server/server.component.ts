import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './server.component.html',
  styles:[`
  .online {
    color: white;
  }
  `],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  constructor () {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
