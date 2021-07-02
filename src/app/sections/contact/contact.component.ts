import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  constructor(private fb: FormBuilder, private api: ApisService) {
    this.contact = fb.group({
      name: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.contact.value)
    this.api.sendEmail(this.contact.value).subscribe((x) => {
      console.log(x);
      this.contact.reset();
    });
  }
}
