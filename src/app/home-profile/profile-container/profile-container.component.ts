import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent {

  profileDetails: string;
  profileLocation = 'Based in San Antonio, Texas, USA';

  constructor() {
    this.profileDetails = `Front End Developer with professional experience focused on web design, development, 
                    and web services along with Automation Testing. 
                    Additionally, is well versed in RESTful APIs and Web Services, creating SQL queries for the development, 
                    JIRA for project management purposes such as storyboard and logging defects, 
                    and using continuous integration tools such as Jenkins.`;
  }

    openEmailApp() {
      window.location.href = `mailto:${'balijasunil01@gmail.com'}`;
    }

    downloadResume() {
      window.open('../../../assets/files/SunilBalija.pdf');
    }
}
