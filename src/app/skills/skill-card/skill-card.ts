import { Component, input, signal } from '@angular/core';
import { Years } from '../years/years';

@Component({
  selector: 'skill-card',
  imports: [Years],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css'
})
export class SkillCard {
  item = input<skill>({} as skill);
  skillIndex = input<number>(0);
  animation = input<string>('');
  randNumx =  Math.floor(Math.random() * (100 - (-1*100) + 1) + (-1*100));
  randNumy =   Math.floor(Math.random() * (100 - (-1*100) + 1) + (-1*100));

  randomx = signal(this.randNumx);
  randomy = signal(this.randNumy);
}
