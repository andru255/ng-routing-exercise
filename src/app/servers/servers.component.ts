import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { IServer } from './server/server.interface';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public servers: IServer[] = [];

  constructor(
    private serverService: ServersService,
  ) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }

}
