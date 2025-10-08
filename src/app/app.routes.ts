import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

export const routes: Routes = [
    { path: '', component: Home, data: { title: 'Home' } },
    { path: 'experience', component: Experience, data: { title: 'Experience' } },
    { path: 'skills', component: Skills, data: { title: 'Skills' } },
    { path: 'projects', component: Projects, data: { title: 'Projects' } },
    { path: 'contact', component: Contact , data: { title: 'Contact' } }
];
