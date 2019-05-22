import { Component, OnInit } from '@angular/core';
import {Show} from '../services/models/show';
import {TvmazeService} from '../services/models/tvmaze.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit {
show: Show;
sid: number;
  constructor(public tvmaze: TvmazeService, public route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => pm.get('sid'));
  }
  ngOnInit() {
  }

}
