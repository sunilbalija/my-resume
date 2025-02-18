import { Component, OnInit } from '@angular/core';
import { JobDetails } from 'src/app/shared/jobDetails.model';

@Component({
  selector: 'app-experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss']
})
export class ExperienceContainerComponent implements OnInit {

  experienceDetails = `Extensive experience in front-end development, 
  particularly with Angular, have honed my skills in building and migrating Angular applications, 
  specifically upgrading from AngularJS to Angular 16. This experience has deepened my understanding of Angular’s architecture, 
  including module structure, components, and services. I also have substantial hands-on experience with state management libraries like NgRx and have successfully implemented advanced features using RxJS for reactive programming. 
  This complements my solid foundation in web technologies, 
  including HTML5 and SCSS, where I excel in transforming wireframes and UI/UX designs into functional, 
  pixel-perfect web pages.`;

  jobDetailsList!: JobDetails[];

  ngOnInit() {

    this.jobDetailsList = [
      {
        companyName: 'HomeDepot . Contractor',
        jobTitle: 'Fullstack Developer',
        location: 'San Antonio, TX',
        jobDescription: `Lead full-stack development of Angular 16 applications, orchestrating Java 8 backend services while driving modernization of legacy AngularJS systems to current standards.`,
        startDate: 'Nov 2021',
        endDate: 'Present'
      },
      {
        companyName: 'RBFCU . Contractor',
        jobTitle: 'Sr Front-end Developer',
        jobDescription: `Led Angular and Ionic front-end development for mobile and web applications, implementing NgRx state management and establishing robust testing frameworks`,
        startDate: 'Mar 2019',
        endDate: 'Nov 2021',
        location: 'San Antonio, TX'
      },
      {
        companyName: 'CAS (Chemical Abstract Solutions) . Contractor',
        jobTitle: 'Front-end Developer',
        jobDescription: `Led full-stack development using Angular 5, Ruby, and Scala, implementing RESTful endpoints and upgrading Ruby from 2.2.10 to 2.6.0 while resolving critical migration challenges`,
        startDate: 'Sep 2017',
        endDate: 'Jan 2019',
        location: 'Columbus, OH'
      },
      {
        companyName: 'MicroInfo Tech . Intern',
        jobTitle: 'Front-end Developer',
        jobDescription: `Engineered responsive front-end solutions using Ruby on Rails and JavaScript, implementing Test-Driven Development to enhance code quality and development efficiency`,
        startDate: 'Aug 2016',
        endDate: 'Sep 2017',
        location: 'New Jersey, NJ'
      },
      {
        companyName: 'Blooms Solution Inc . Fulltime',
        jobTitle: 'Front-end Developer',
        jobDescription: `Led front-end architecture using JavaBeans and Ruby on Rails, and optimising image processing workflows through ng-upload care libraries`,
        startDate: 'Sep 2013',
        endDate: 'Jul 2015',
        location: 'Hydrabad, India'
      }
    ];
  }
}

