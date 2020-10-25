import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MarketplaceNewComponent } from './marketplace-new.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MarketplaceNewComponent', () => {
  let component: MarketplaceNewComponent;
  let fixture: ComponentFixture<MarketplaceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MarketplaceNewComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
