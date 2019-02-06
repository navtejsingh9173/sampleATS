import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CampaignDTO } from '../dto/CampaignDTO';
import { CampagnResourceService } from '../service/campagn-resource.service';
import { CampagnDataService } from '../service/campagn-data.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  moduleId: 'campaign',
  selector: 'app-campaign-home-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CampaignHomeListComponent implements OnInit {

  // currentSelectJob: CampaignDTO;
  jobs: CampaignDTO[];
  currentJobUnderEdit: CampaignDTO;
  searchKeyword = '';
  searchKeywordInputSubject: Subject<string> = new Subject<string>();
  jobTypes: Object = {
    'TEMPORARY': 'Temporary',
    'FREELANCER': 'Freelancer',
    'FULL_TIME': 'Full Time',
    'PART_TIME': 'Part Time'
  };

  constructor(private campaignResourceService: CampagnResourceService, private campaignDataService: CampagnDataService) {
    this.campaignResourceService = campaignResourceService;
    this.searchKeywordInputSubject.pipe(
        debounceTime(300), // wait 300ms after the last event before emitting last event
        distinctUntilChanged()) // only emit if value is different from previous value
        .subscribe(newKeyword => {
          this.searchKeyword = newKeyword;
          this.getCampaigns();
        });
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

  getCampaigns() {
    this.campaignResourceService.getCampaigns(this.searchKeyword).subscribe((data) => {
      this.jobs = data;
      this.campaignDataService.setCurrentJob(this.jobs[0]);
      this.selectJobToEdit(this.jobs[0] ? this.jobs[0] : undefined);
      console.log(`The Data loaded is :: ${JSON.stringify(data)}`);
    });
  }

  delete(job: CampaignDTO) {
    console.log(`inside delete`);
    this.campaignResourceService.deleteCampaign(job.id).subscribe(() => {
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
    this.campaignDataService.setCurrentJobUnderEdit(job ? new CampaignDTO(job) : undefined);
  }

  changeKeyword(newValue) {
    this.searchKeywordInputSubject.next(newValue);
  }

}
