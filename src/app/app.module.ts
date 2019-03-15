import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertisementsCampaignsComponent } from './advertisements-campaigns/advertisements-campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsCampaignsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
