import { Component } from '@angular/core';
import { Control } from '@angular/common'
import {Observable} from 'rxjs/Observable';
import {WikiService} from './wiki.service';
import 'rxjs/Rx';


@Component({
  moduleId: module.id,
  selector: 'wiki-app',
  templateUrl: 'wiki.component.html',
  styleUrls: ['wiki.component.css']
})
export class WikiAppComponent {
  items: Observable<Array<string>>;
  term = new Control();

  constructor(public wikiService: WikiService) { }

  // search(term) {
  //   this.wikiService.rawSearch(term).then(res => {
  //     this.items = res;
  //   });
  // }

  ngOnInit() {
    // this.term.valueChanges.debounceTime(400).subscribe(this.search);
    this.items = this.wikiService.search(this.term.valueChanges, 400)
  }
}
