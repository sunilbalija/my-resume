import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceContainerComponent } from './experience-container.component';

describe('ExperienceContainerComponent', () => {
  let component: ExperienceContainerComponent;
  let fixture: ComponentFixture<ExperienceContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceContainerComponent]
    });
    fixture = TestBed.createComponent(ExperienceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
