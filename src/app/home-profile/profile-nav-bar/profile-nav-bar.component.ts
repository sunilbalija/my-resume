import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-profile-nav-bar',
  templateUrl: './profile-nav-bar.component.html',
  styleUrls: ['./profile-nav-bar.component.scss']
})
export class ProfileNavBarComponent {


  testModal: bootstrap.Modal | undefined;

  constructor() { }

  openModal(){
    console.log('openModal');
    
    this.testModal = new bootstrap.Modal('testModal',{} ) 
    this.testModal?.show()
  }

}
