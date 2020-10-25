import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketplaceViewComponent } from './marketplace-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('MarketplaceViewComponent', () => {
  let component: MarketplaceViewComponent;
  let fixture: ComponentFixture<MarketplaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceViewComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
