import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobContainerComponent } from './job-container.component';

describe('JobContainerComponent', () => {
  let component: JobContainerComponent;
  let fixture: ComponentFixture<JobContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobContainerComponent]
    });
    fixture = TestBed.createComponent(JobContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
