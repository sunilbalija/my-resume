import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesContainerComponent } from './languages-container.component';

describe('LanguagesContainerComponent', () => {
  let component: LanguagesContainerComponent;
  let fixture: ComponentFixture<LanguagesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagesContainerComponent]
    });
    fixture = TestBed.createComponent(LanguagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
