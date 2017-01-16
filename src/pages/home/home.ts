import { Component } from '@angular/core';
import { ContentService } from '../../providers/content-service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ContentService]
})
export class HomePage {

  constructor(public contentService:ContentService) {
    this.github.getContent(1).subscribe(
      data => {
        this.foundRepos = data;
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

}
