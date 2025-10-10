import { Component, signal } from '@angular/core';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = signal([
    {
      id: 1, projectName: 'Fitness Tracker (In Progress)',
      stack: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'GraphQL',
        'Apollo Server/Client', 'Material UI'
      ], description: `An app that allows users to keep track of workouts 
          with the ability to choose exercises from a database. Future enhancements 
          will allow users to also record weight, reps, sets, and rest times to be 
          used for calculating the optimal weight to train with for strength gains`
        , demoLink: `https://hyperstrength-fitness-tracker-six.vercel.app/`
        , repo: `https://github.com/ChadwickButts/HyperStrength-Fitness-Tracker`
    },
    {
      id: 2, projectName: 'Blogging Platform API',
      stack: ['Node', 'Express']
        , description: `A simple RESTful API with basic CRUD operations for a personal 
          blogging platform.`
        , demoLink: ''
        , repo: 'https://github.com/ChadwickButts/Blogging-Platform-Project/tree/main/BackendOnly/BloggingPlatform/Node'
    },
    {
      id: 3, projectName: 'Portfolio',
      stack: ['Angular', 'TypeScript', 'CSS', 'HTML']
        , description: `This personal portfolio site you're on.`
        , demoLink: ''
        , repo: 'https://github.com/ChadwickButts/Chadwickbutts.github.io'
    }
  ])
}
