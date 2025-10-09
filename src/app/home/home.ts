import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillCard } from '../skills/skill-card/skill-card';
import { skills as data } from '../skillsData';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SkillCard],
  templateUrl: './home.html',
  styleUrl: './home.css'

})
export class Home {
  topSkills = ['JavaScript', 'React', 'Angular', '.NET'];
  
  skills = signal(data.filter(skill => this.topSkills.includes(skill.name)));
}
