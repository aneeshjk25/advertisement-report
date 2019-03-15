import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementsCampaignsComponent } from './advertisements-campaigns.component';

describe('AdvertisementsCampaignsComponent', () => {
  let component: AdvertisementsCampaignsComponent;
  let fixture: ComponentFixture<AdvertisementsCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementsCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementsCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
