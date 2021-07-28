import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contact = fb.group({
      name: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  submit() {
    init('user_uRIJMnOAKQkzeD4GtBuWh');
    emailjs
      .send('service_xr8m56i', 'diego', {
        email: this.contact.value.email,
        tel: this.contact.value.tel,
        name: this.contact.value.name,
        message: this.contact.value.message,
      })
      .then(
        function (response: any) {
          alert('mensaje enviado');
        },
        function (error: any) {
          console.log('FAILED...', error);
        }
      );
    this.contact.reset();
  }
}
