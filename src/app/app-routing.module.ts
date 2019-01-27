import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './campaign/dashboard/dashboard.component';
import { ListComponent } from './campaign/list/list.component';

const routes: Routes = [
  {
    path: "campaign",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
