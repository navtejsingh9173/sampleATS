import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CampaignDTO } from '../dto/CampaignDTO';

@Injectable()
export class CampagnDataService {

  private currentJobSaveStateSource = new BehaviorSubject<boolean>(false);
  currentJobSaveStateObservable = this.currentJobSaveStateSource.asObservable();

  private currentJobSource = new BehaviorSubject<CampaignDTO>(null);
  currentSelectedJobObservable = this.currentJobSource.asObservable();

  private currentJobUnderEditSource = new BehaviorSubject<CampaignDTO>(null);
  currentJobUnderEdit = this.currentJobUnderEditSource.asObservable();

  constructor() { }

  saveSuccessful(success: boolean) {
    this.currentJobSaveStateSource.next(success);
  }

  setCurrentJob(job: CampaignDTO) {
    this.currentJobSource.next(job);
  }

  setCurrentJobUnderEdit(job: CampaignDTO) {
    this.currentJobUnderEditSource.next(job);
  }

}
