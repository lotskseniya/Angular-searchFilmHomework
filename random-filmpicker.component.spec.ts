import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFilmpickerComponent } from './random-filmpicker.component';

describe('RandomFilmpickerComponent', () => {
  let component: RandomFilmpickerComponent;
  let fixture: ComponentFixture<RandomFilmpickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomFilmpickerComponent]
    });
    fixture = TestBed.createComponent(RandomFilmpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
