import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('call the getHero method', inject([HeroService], (service: HeroService) => {
    service.getHero(11).subscribe(hero => {
      expect(hero).toEqual({ id: 11, name: 'Mr. Nice' });
    });
  }));
});
