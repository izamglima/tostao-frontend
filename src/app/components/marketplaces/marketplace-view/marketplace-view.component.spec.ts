import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceViewComponent } from './marketplace-view.component';

describe('MarketplaceViewComponent', () => {
  let component: MarketplaceViewComponent;
  let fixture: ComponentFixture<MarketplaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
