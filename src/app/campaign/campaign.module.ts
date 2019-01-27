import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampagnResourceService } from './service/campagn-resource.service';
import { CampagnDataService } from './service/campagn-data.service';

@NgModule({
  declarations: [CreateComponent, ListComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CampagnResourceService,
    CampagnDataService
  ]
})
export class CampaignModule { }
