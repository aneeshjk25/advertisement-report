import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = '/api';

export interface AdvertisersCampaign {
  name: string;
  cost: number;
  advertiser_id: number;
  number_of_campaigns: number;
}
export interface AdvertisersCampaignsReport {
  advertiser_id: number;
  campaign_id: number;
  advertiser_name: string;
  campaign_name: string;
  cost: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  public advertisersCampaigns() {
    return this.http.get(url + '/advertisers_campaigns') as Observable<AdvertisersCampaign[]>;
  }

  public advertisersCampaignsReport() {
    return this.http.get(url + '/advertisers_campaigns_reports') as Observable<AdvertisersCampaignsReport[]>;
  }
}
