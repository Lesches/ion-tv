import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ResultsComponent} from './results/results.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
query: string;
  constructor(public modalController: ModalController) { }



    onSearch()  {
      const modal = this.modalController.create({
        component: ResultsComponent
      });

    }


}
