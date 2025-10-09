import { Component, input } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  proj = input<project>();

  hideButton() {
    if (this.proj()?.demoLink === '') {
      return 'none';
    }

    return '';
  }
}
