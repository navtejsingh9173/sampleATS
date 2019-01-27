import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CampaignDTO } from '../dto/CampaignDTO';

@Injectable()
export class CampagnResourceService {

  private httpClient:HttpClient;

  private campaignBaseURL = "http://localhost:8080/api/v1/campaign";

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  public getCampaigns():Observable<CampaignDTO[]> {
    return this.httpClient.get<CampaignDTO[]>(this.campaignBaseURL);   
  };

  public deleteCampaign(id:Number):Observable<Boolean> {
    let params = new HttpParams().append("id", id.toString());
    return this.httpClient.delete<Boolean>(this.campaignBaseURL,{'params':params});   
  }

  public createCampaign(campaign: CampaignDTO):Observable<CampaignDTO> {
    return this.httpClient.post<CampaignDTO>(this.campaignBaseURL, campaign);   
  }
o
}
