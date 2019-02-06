import { Component, OnInit } from '@angular/core';
import { CampaignDTO } from '../dto/CampaignDTO';
import { CampagnDataService } from '../service/campagn-data.service';

@Component({
  selector: 'app-campaign-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CampaignHomeComponent implements OnInit {

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
