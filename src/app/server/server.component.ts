import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
