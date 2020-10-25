import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the menu', () => {
    expect(component.slideRight).toBeFalse();
    expect(component.slideLeft).toBeFalse();
    component.openMenu();
    expect(component.slideRight).toBeTrue();
    expect(component.slideLeft).toBeFalse();
  });

  it('should close the menu', () => {
    expect(component.slideRight).toBeFalse();
    expect(component.slideLeft).toBeFalse();
    component.closeMenu();
    expect(component.slideRight).toBeFalse();
    expect(component.slideLeft).toBeTrue();
  });
});
