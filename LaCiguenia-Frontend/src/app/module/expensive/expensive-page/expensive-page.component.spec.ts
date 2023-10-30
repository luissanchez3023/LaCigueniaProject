import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensivePageComponent } from './expensive-page.component';

describe('ExpensivePageComponent', () => {
  let component: ExpensivePageComponent;
  let fixture: ComponentFixture<ExpensivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensivePageComponent]
    });
    fixture = TestBed.createComponent(ExpensivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
