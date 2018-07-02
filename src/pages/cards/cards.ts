import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];
  content;
  name;
  files = [];

  constructor(public navCtrl: NavController
  ) {


  }

  async uploadFile(event) {
    const files = [];
    const file = event.target.files[0];
    console.log(file);
    this.name = file.name;

    let zip = await JSZip.loadAsync(file);
    console.log('zip', zip);// 1) read the Blob
    zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
      console.log(zipEntry);
      files.push(zipEntry);

    });
    let css =  await zip.file("style.css").async("string");
    this.content = await zip.file("login.html").async("string");



    console.log('css',css);
    console.log('html',this.content);


    let style = frames['frame'].document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    console.log(style);


    frames['frame'].document.write(this.content);
    frames['frame'].document.head.appendChild(style);
    this.files = files;
  }


}
