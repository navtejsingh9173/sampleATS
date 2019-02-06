import { Component, OnInit } from '@angular/core';
import { CampaignDTO } from '../dto/CampaignDTO';
import { CampagnResourceService } from '../service/campagn-resource.service';
import { CampagnDataService } from '../service/campagn-data.service';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CampaignCreateComponent implements OnInit {

  public newJob: CampaignDTO;
  jobTypes: Object = {
    'TEMPORARY': 'Temporary',
    'FREELANCER': 'Freelancer',
    'FULL_TIME': 'Full Time',
    'PART_TIME': 'Part Time'
  };
  jobTypesArray: Object = [
    'TEMPORARY',
    'FULL_TIME',
    'PART_TIME',
    'FREELANCER'
  ];

  constructor(private campaignResourceService: CampagnResourceService, private campaignDataService: CampagnDataService) { }

  ngOnInit() {
    this.campaignDataService.currentJobUnderEdit.subscribe(jobUnderEdit => {
      this.newJob = jobUnderEdit;
    });
  }

  submitRequest() {
    this.campaignResourceService.createCampaign(this.newJob).subscribe(() => {
      console.log(`Job Created.`);
      this.campaignDataService.saveSuccessful(true);
      this.campaignDataService.setCurrentJobUnderEdit(null);
    }, () => {
      console.log(`Error while creating job.`);
      this.campaignDataService.saveSuccessful(false);
    });
  }

  onCancelRequest() {
    console.log(`Canceling create.`);
    this.campaignDataService.setCurrentJobUnderEdit(null);
  }

}
