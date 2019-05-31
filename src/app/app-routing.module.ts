import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '/'},
  { 
    path: 'servers', component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}