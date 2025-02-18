import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationContainerComponent } from './education-container.component';

describe('EducationContainerComponent', () => {
  let component: EducationContainerComponent;
  let fixture: ComponentFixture<EducationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationContainerComponent]
    });
    fixture = TestBed.createComponent(EducationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
