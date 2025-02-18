import { Component, Input } from '@angular/core';
import { JobDetails } from 'src/app/shared/jobDetails.model';

@Component({
  selector: 'app-job-container',
  templateUrl: './job-container.component.html',
  styleUrls: ['./job-container.component.scss']
})
export class JobContainerComponent {
  @Input() jobDetails!: JobDetails;
}
