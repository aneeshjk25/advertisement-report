import { Component, OnInit, ElementRef } from '@angular/core';
import { ReportsService } from '../reports.service';

import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-advertisements-campaigns',
  templateUrl: './advertisements-campaigns.component.html',
  styleUrls: ['./advertisements-campaigns.component.css']
})
export class AdvertisementsCampaignsComponent implements OnInit {

  constructor(private report: ReportsService, private el: ElementRef,
  ) { }
  Highcharts = Highcharts;
  chartOptions = {
    title: { text: 'Advertisers Campaign Expense' },
    yAxis: {
      title: {
        text: 'Euro €'
      }
    }
  };

  private chart: Highcharts.Chart;

  ngOnInit() {
    this.chart = this.Highcharts.chart(this.el.nativeElement, this.chartOptions);

    this
      .report
      .advertisersCampaigns()
      .subscribe((advertisersCampaigns) => {
        advertisersCampaigns.forEach((advertisersCampaign) => {
          (advertisersCampaign as Highcharts.SeriesColumnDataOptions).y = advertisersCampaign.cost;
        });
        this.chart.addSeries({
          name: 'Expense',
          type: 'column',
          data: advertisersCampaigns
        });
      });
  }

}
