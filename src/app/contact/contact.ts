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
    const subject = 'Exciting Job Opportunity';
    const body = encodeURIComponent(this.visitorContact.value.message as string);
    window.location.href = `mailto:chadwick.c.butts@gmail.com?subject=${subject}&body=${body}`;
    console.log(this.visitorContact.value.message);    
  }
}
