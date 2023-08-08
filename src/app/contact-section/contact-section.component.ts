import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('fmessage') fmessage!: ElementRef;
  @ViewChild('fbutton') fbutton!: ElementRef;
  sendMail() {
    console.log('sending mail', this.myForm);
    let nameField = this.fname.nativeElement;
    let messageField = this.fmessage.nativeElement;
    let sendButton = this.fbutton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', '');
    fd.append('message', '');

    fetch(
      'https://w01883ec.kasserver.com/dennis-schneider.org/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
