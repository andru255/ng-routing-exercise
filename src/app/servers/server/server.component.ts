import { Component, OnInit } from '@angular/core';
import { IServer } from './server.interface';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: IServer;

  private id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serversService: ServersService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramsData)=>{
      this.id = +paramsData.id;
      this.server = this.serversService.getServer(this.id);
    })
  }
}
