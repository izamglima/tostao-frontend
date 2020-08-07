import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingHistoryComponent } from './spending-history.component';

describe('SpendingHistoryComponent', () => {
  let component: SpendingHistoryComponent;
  let fixture: ComponentFixture<SpendingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
