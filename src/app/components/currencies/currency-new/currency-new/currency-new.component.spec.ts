import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyNewComponent } from './currency-new.component';
import { FormsModule } from '@angular/forms';

describe('CurrencyNewComponent', () => {
  let component: CurrencyNewComponent;
  let fixture: ComponentFixture<CurrencyNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CurrencyNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
