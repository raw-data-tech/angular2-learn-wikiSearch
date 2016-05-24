import {WikiService} from './app/wiki.service';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WikiAppComponent, environment } from './app/';
import {JSONP_PROVIDERS, Jsonp} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(WikiAppComponent, [WikiService, JSONP_PROVIDERS]);

