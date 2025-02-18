import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillsContainerComponent } from './professional-skills-container.component';

describe('ProfessionalSkillsContainerComponent', () => {
  let component: ProfessionalSkillsContainerComponent;
  let fixture: ComponentFixture<ProfessionalSkillsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalSkillsContainerComponent]
    });
    fixture = TestBed.createComponent(ProfessionalSkillsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
