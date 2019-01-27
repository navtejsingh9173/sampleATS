import { Component, OnInit } from '@angular/core';
import { CampaignDTO } from '../dto/CampaignDTO';
import { CampagnResourceService } from '../service/campagn-resource.service';
import { CampagnDataService } from '../service/campagn-data.service';

@Component({
  selector: 'campaign-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobUnderEdit: CampaignDTO;
  
  constructor(private campaignDataService: CampagnDataService) { }

  ngOnInit() {
    this.campaignDataService.currentJobUnderEdit.subscribe(jobUnderEdit => {
      this.jobUnderEdit = jobUnderEdit;
    });
  }

  createNewJob() {
    this.campaignDataService.setCurrentJobUnderEdit(new CampaignDTO(null));
  }

}
