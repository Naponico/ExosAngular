import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransDetailComponent } from './trans-detail.component';

describe('TransDetailComponent', () => {
  let component: TransDetailComponent;
  let fixture: ComponentFixture<TransDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransDetailComponent]
    });
    fixture = TestBed.createComponent(TransDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
