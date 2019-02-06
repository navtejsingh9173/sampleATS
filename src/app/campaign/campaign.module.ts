import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CampaignCreateComponent } from './create/create.component';
import { CampaignHomeListComponent } from './list/list.component';
import { CampaignHomeComponent } from './home/home.component';
import { CampagnResourceService } from './service/campagn-resource.service';
import { CampagnDataService } from './service/campagn-data.service';

@NgModule({
  declarations: [CampaignCreateComponent, CampaignHomeListComponent, CampaignHomeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CampagnResourceService,
    CampagnDataService
  ],
  id: 'campaign'
})
export class CampaignModule { }
