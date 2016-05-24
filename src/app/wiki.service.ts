import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WikiService {
  constructor(private jsonp: Jsonp) {}

  search (terms: Observable<string>, debounceDuration) {
    return terms.debounceTime(debounceDuration).switchMap(term => this.rawSearch(term));
  }
  
  rawSearch(term: string){
    let search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .map((response) => response.json()[1]);
  }
}