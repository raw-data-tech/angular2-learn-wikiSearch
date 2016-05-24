import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WikiAppComponent } from '../app/wiki.component';

beforeEachProviders(() => [WikiAppComponent]);

describe('App: Wiki', () => {
  it('should create the app',
      inject([WikiAppComponent], (app: WikiAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'wiki works!\'',
      inject([WikiAppComponent], (app: WikiAppComponent) => {
    expect(app.title).toEqual('wiki works!');
  }));
});
