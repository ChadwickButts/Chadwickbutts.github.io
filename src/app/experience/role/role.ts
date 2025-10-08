import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'role',
  imports: [],
  templateUrl: './role.html',
  styleUrl: './role.css'
})
export class Role {
  job = input.required<experienceDetails>();


  calculateAnimationDelay(val: number ) {
    return -1*val + 1  + 's'
  }
}
