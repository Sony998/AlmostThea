import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcialListComponent } from './spcial-list.component';

describe('SpcialListComponent', () => {
  let component: SpcialListComponent;
  let fixture: ComponentFixture<SpcialListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpcialListComponent]
    });
    fixture = TestBed.createComponent(SpcialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
