import { Component } from '@angular/core';
import { JobDetails } from 'src/app/shared/jobDetails.model';

@Component({
  selector: 'app-education-container',
  templateUrl: './education-container.component.html',
  styleUrls: ['./education-container.component.scss']
})
export class EducationContainerComponent {
  educationDetailsList!: JobDetails[];
  educationDescription!: string;

  constructor() {
    this.educationDetailsList = [
      {
        jobTitle: 'Masters in Information Technology',
        companyName: 'University of Cumberland',
        startDate: '2021',
        endDate: '2022',
      },
      {
        jobTitle: 'Masters in Computer Science',
        companyName: 'University of Central Missouri',
        startDate: '2015',
        endDate: '2016',
      },
      {
        jobTitle: 'Bachelor of Engineering in Computer Science',
        companyName: 'Jawaharlal Nehru Technological University',
        startDate: '2009',
        endDate: '2013',
      }
    ];

    this.educationDescription = 'Degree and Certifications in the fields of data of Computer Science from University of Central Missouri, University of Cumberland and Jawaharlal Nehru Institute of Technology.';
  }

}
