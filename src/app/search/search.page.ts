import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  query: string;

  constructor(public modalController: ModalController) { }



    async onSearch() {
      const modal = await this.modalController.create({
        component: SearchPage
      });
      return await modal.present();
    }


}
