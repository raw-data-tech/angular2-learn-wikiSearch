import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WikiService } from './wiki.service';

describe('Wiki Service', () => {
  beforeEachProviders(() => [WikiService]);

  it('should ...',
      inject([WikiService], (service: WikiService) => {
    expect(service).toBeTruthy();
  }));
});
