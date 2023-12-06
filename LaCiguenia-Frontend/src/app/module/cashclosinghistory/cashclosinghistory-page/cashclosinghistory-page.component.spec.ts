import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashclosinghistoryPageComponent } from './cashclosinghistory-page.component';

describe('CashclosinghistoryPageComponent', () => {
  let component: CashclosinghistoryPageComponent;
  let fixture: ComponentFixture<CashclosinghistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashclosinghistoryPageComponent]
    });
    fixture = TestBed.createComponent(CashclosinghistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
