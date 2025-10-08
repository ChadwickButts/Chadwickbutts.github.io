import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  visitorContact = new FormGroup({
    contactName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('', [Validators.required])
  });


  onSubmit() {
    let subject = 'Exciting Job Opportunity';
    window.location.href = `mailto:chadwick.c.butts@gmail.com?subject=${subject}&body=${this.visitorContact.value.message}`;
    console.log(this.visitorContact.value);    
  }
}
