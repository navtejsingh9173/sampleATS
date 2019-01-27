import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CampaignDTO } from '../dto/CampaignDTO';
import { CampagnResourceService } from '../service/campagn-resource.service';
import { CampagnDataService } from '../service/campagn-data.service';

@Component({
  selector: 'campaign-dashboard-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // currentSelectJob: CampaignDTO;
  jobs: CampaignDTO[];
  currentJobUnderEdit: CampaignDTO;

  constructor(private campaignResourceService:CampagnResourceService, private campaignDataService:CampagnDataService) {
    this.campaignResourceService = campaignResourceService;
  }

  ngOnInit() {
    this.getCampaigns();
    this.campaignDataService.currentJobSaveStateObservable.subscribe(currentSaveState => {
      if (currentSaveState) {
        this.getCampaigns();
      } else { 
        console.log(`Error while loading list as the save failed.`);
      }
    });
    this.campaignDataService.currentJobUnderEdit.subscribe(currentJobUnderEdit => {
      this.currentJobUnderEdit = currentJobUnderEdit;
    });
  }

  getCampaigns(){
    this.campaignResourceService.getCampaigns().subscribe((data)=>{
      this.jobs = data;
      this.campaignDataService.setCurrentJob(this.jobs[0]);
      console.log(`The Data loaded is :: ${JSON.stringify(data)}`);
    });
  }

  delete(job: CampaignDTO) {
    console.log("inside delete");
    this.campaignResourceService.deleteCampaign(job.id).subscribe(()=>{
      if (this.currentJobUnderEdit.id === job.id) {
        this.campaignDataService.setCurrentJobUnderEdit(null);  
        this.campaignDataService.setCurrentJob(this.jobs[0]);  
      }
      this.getCampaigns();
    });
  }

  selectCurrentJob(job: CampaignDTO) {
    this.campaignDataService.setCurrentJob(job);
  }

  selectJobToEdit(job: CampaignDTO) {
    this.campaignDataService.setCurrentJobUnderEdit(new CampaignDTO(job));
  }

}
