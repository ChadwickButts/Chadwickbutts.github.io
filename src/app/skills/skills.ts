import { Component, computed, signal } from '@angular/core';
import { SkillCard } from './skill-card/skill-card';
import { skills as data } from '../skillsData';

@Component({
  selector: 'skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  selectedCategory = signal(0);
  categories = signal([
    { value: 'Frontend', key: 1, name: 'frontend' },
    { value: 'Frameworks/Libraries', key: 2, name: 'frameworks' },
    { value: 'Backend', key: 3, name: 'backend' },
    { value: 'Cloud Services', key: 4, name: 'cloud' },
    { value: 'Versioning', key: 5, name: 'versioning' },
    { value: 'All', key: 0, name: 'all' }
  ]);

  skills = signal(data);

  selectedSkills = computed(() => this.skills().filter(skill => {
    if (this.selectedCategory() !== 0) {
      return skill.layer.includes(this.selectedCategory());
    } else {
      return true;
    }
  }))

  handleCategoryClick(event: MouseEvent) {
    if (event.target !== null) {
      const { value } = (event.target as HTMLInputElement);
      this.selectedCategory.set(Number(value));
    }
  }

  applyActiveClass(value: boolean) {
    return value ? 'active' : '';
  }
}
