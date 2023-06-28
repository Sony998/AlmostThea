import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenbuttonsComponent } from './genbuttons.component';

describe('GenbuttonsComponent', () => {
  let component: GenbuttonsComponent;
  let fixture: ComponentFixture<GenbuttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenbuttonsComponent]
    });
    fixture = TestBed.createComponent(GenbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
