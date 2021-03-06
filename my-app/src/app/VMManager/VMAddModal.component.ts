import { Component } from '@angular/core';
import { Modal } from 'ng2-modal-dialog/modal.module';
 
@Component({
  selector: 'app-VMAddModal',
  templateUrl: './VMAddModal.component.html',
  styleUrls: ['./VMAddModal.component.css']
})
// the Modal import allows the usage of the @Modal alias that adds the Modal functions.

@Modal()
export class VMAddModalComponent {
 
  loginStatus: boolean = true;
  closeModal: Function;
  
  // Will fetch the userCreds passed from the callback.
  userCreds;
 
  constructor() { }
 
  onCancel(): void {
    this.closeModal();
  }
 
  onSubmit(formCreds): void {
    event.preventDefault();
 
    if ((formCreds.username === this.userCreds.username) && (formCreds.password === this.userCreds.password)) {
      this.loginStatus = true;
      this.closeModal();
    } else {
      this.loginStatus = false;
    }
  }
}