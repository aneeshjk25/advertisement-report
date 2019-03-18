import { Component, OnInit, ElementRef } from '@angular/core';
import { ReportsService } from '../reports.service';

import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-advertisements-campaigns',
  templateUrl: './advertisements-campaigns.component.html',
  styleUrls: ['./advertisements-campaigns.component.css']
})
export class AdvertisementsCampaignsComponent implements OnInit {

  constructor(private report: ReportsService, private el: ElementRef,
  ) { }
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: { text: 'Advertisers Campaign Expense' },
    yAxis: {
      title: {
        text: 'Euro €'
      }
    },
    chart: {
      width: null,
    }
  };

  private chart: Highcharts.Chart;

  ngOnInit() {
    Drilldown(Highcharts);
    forkJoin(
      this.report.advertisersCampaigns(),
      this.report.advertisersCampaignsReport()
    )
      .subscribe(([advertisersCampaigns, advertisersCampaignsReports]) => {
        advertisersCampaigns.forEach((advertisersCampaign) => {
          (advertisersCampaign as Highcharts.SeriesColumnDataOptions).y = advertisersCampaign.cost;
          (advertisersCampaign as Highcharts.SeriesColumnDataOptions).drilldown = advertisersCampaign.name;
        });
        const s = advertisersCampaigns.map((advertisersCampaign) => {
          const series: Highcharts.SeriesColumnOptions = {
            id: advertisersCampaign.name,
            name: advertisersCampaign.name,
            type: 'column',
          };
          const t = advertisersCampaignsReports
            .filter((a) => a.advertiser_id === advertisersCampaign.advertiser_id)
            .map((a) => {
              const data = {
                y: a.cost,
                name: a.campaign_name
              };
              return data;
            });
          series.data = t;
          return series;
        });
        this.chartOptions.drilldown = { series: s };

        this.chartOptions.series = [{
          type: 'column',
          data: advertisersCampaigns,
          name: 'Expense',
        }];
        this.chart = this.Highcharts.chart(this.el.nativeElement, this.chartOptions);
      });
  }

}
