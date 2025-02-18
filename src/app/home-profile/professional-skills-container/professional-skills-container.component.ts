import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-skills-container',
  templateUrl: './professional-skills-container.component.html',
  styleUrls: ['./professional-skills-container.component.scss']
})
export class ProfessionalSkillsContainerComponent {
  skillsDescription = 'Key competencies essential for navigating and excelling in the various professional context like proficiency in core Angular concepts like components, modules, services, routing, and data binding, along with related technologies like TypeScript, HTML, CSS, and relevant testing frameworks (like Karma and Jasmine), while emphasizing your ability to build complex, performant, and maintainable Angular applications. ';
  skillAreaList = [
    // frameWorksList, 'Back End', 'Mobile', 'Database', 'Testing', 'Design', 'Soft Skills'
  ]
  frameWorksList = ['Angular', 'React', 'Rails'];
  fESkillsList = [ 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap', 'Material Design'];
  bESkillsList = ['NodeJS', 'Java',  ];
  databaseSkillsList = ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle'];
  testingSkillsList = ['Jest', 'Jasmine', 'Mocha', 'Protractor'];
  softWareToolsList = ['Git', 'Jira', 'Slack', 'VS Code', 'Eclipse', 'IntelliJ', 'Android Studio', 'XCode'];
}
