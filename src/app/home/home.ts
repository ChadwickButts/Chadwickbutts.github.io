import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillCard } from '../skills/skill-card/skill-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SkillCard],
  templateUrl: './home.html',
  styleUrl: './home.css'

})
export class Home {
   skills = signal([
    { name: 'JavaScript', skill: 'JavaScript', years: 7, layer: [1], img: 'images/skills/javascript_logo.svg' }
    , { name: 'React', skill: 'React', years: 2, layer: [1, 2], img: 'images/skills/react_logo.svg' }
    , { name: 'Angular', skill: 'Angular', years: 3, layer: [1, 2], img: 'images/skills/angular_logo.svg' }
    , { name: '.NET', skill: 'dotNet', years: 3, layer: [3], img: 'images/skills/dotnet_logo.svg' }
  ]);
}
