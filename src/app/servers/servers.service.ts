import { IServer } from './server/server.interface';

export class ServersService {
  private servers: IServer[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers(): IServer[] {
    return this.servers;
  }

  getServer(id: number): IServer {
    return this.servers.find((server)=> server.id == id);
  }
}