import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage implements OnInit {
    items$: Observable<any>;
  constructor(public navCtrl: NavController,
              private dataService: DataProvider) { }

  ngOnInit() {
    this.items$ = this.dataService.getZipfiles();
  }
}
