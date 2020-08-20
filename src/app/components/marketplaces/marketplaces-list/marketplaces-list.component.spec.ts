import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacesListComponent } from './marketplaces-list.component';

describe('MarketplacesListComponent', () => {
  let component: MarketplacesListComponent;
  let fixture: ComponentFixture<MarketplacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
