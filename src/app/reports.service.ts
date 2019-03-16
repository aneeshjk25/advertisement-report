import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = '/api';

interface Advertiser {
  id: number;
  name: string;
}
export interface AdvertisersCampaigns {
  name: string;
  cost: number;
  number_of_campaigns: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  public advertisers() {
    return this.http.get(url + '/advertisers') as Observable<Advertiser[]>;
  }

  public advertisersCampaigns() {
    return this.http.get(url + '/advertisers_campaigns') as Observable<AdvertisersCampaigns[]>;
  }
}
