import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryNewComponent } from './category-new.component';
import { FormsModule } from '@angular/forms';

describe('CategoryNewComponent', () => {
  let component: CategoryNewComponent;
  let fixture: ComponentFixture<CategoryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CategoryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
