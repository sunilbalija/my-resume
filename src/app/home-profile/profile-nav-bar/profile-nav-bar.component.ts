import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as bootstrap from 'bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactModelComponent } from './contact-model/contact-model.component';



@Component({
  selector: 'app-profile-nav-bar',
  templateUrl: './profile-nav-bar.component.html',
  styleUrls: ['./profile-nav-bar.component.scss']
})
export class ProfileNavBarComponent {


  testModal: bootstrap.Modal | undefined;

  constructor(private modalService: NgbModal,) { }


  openModel() {
    this.modalService.open(ContactModelComponent);
  }
}
