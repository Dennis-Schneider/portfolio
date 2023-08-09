import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('femail') femail!: ElementRef;
  @ViewChild('fmessage') fmessage!: ElementRef;
  @ViewChild('fbutton') fbutton!: ElementRef;

  async sendMail() {
    console.log('sending mail', this.myForm);
    let nameField = this.fname.nativeElement;
    let emailField = this.femail.nativeElement;
    let messageField = this.fmessage.nativeElement;
    let sendButton = this.fbutton.nativeElement;
    let sendSuccess = document.getElementById('sendSuccess');

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    if (sendSuccess != null) {
      sendSuccess.classList.remove('d-none');
    }

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch(
      'https://dennis-schneider.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    setTimeout(() => {
      if (sendSuccess != null) {
        sendSuccess.classList.add('d-none');
        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
      }
    }, 2000);
  }
}
