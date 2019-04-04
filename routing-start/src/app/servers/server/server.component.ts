import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    console.log('server.id: ' + this.server.id);
    console.log('server.name: ' + this.server.name);
    console.log('server.status: ' + this.server.status);

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params['id']);
      }
    );
  }

}
