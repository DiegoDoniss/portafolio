import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact : FormGroup
  constructor(private fb:FormBuilder) { 
    this.contact = fb.group({
      name:['', Validators.required],
      tel:['', Validators.required],
      email:['', Validators.required],
      message:['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
  submit(){
    console.log(this.contact.value)
    this.contact.reset()
  }

}
