import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contact-model',
  templateUrl: './contact-model.component.html',
  styleUrls: ['./contact-model.component.scss']
})
export class ContactModelComponent {
    emailToCopy = 'sunilbalija01@gmail.com'
    numberToCopy = '+18162667556'
  constructor(public activeModal: NgbActiveModal) {}
}
