import { Component, signal } from '@angular/core';
import { Role } from './role/role';

@Component({
  selector: 'experience',
  imports: [Role],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  jobs = signal<Array<experienceDetails>>([
    { id: 3,
      title: 'Software Engineer', 
      company: 'Nielsen',  
      location: 'Oldsmar, FL (Remote)',
      start: 'July 2022', 
      end: 'Oct 2024',
      duties: [
        `Developed an interface using React that offered clients the ability to
         upload assets to an AWS S3 bucket and review the status of uploaded assets`,
        `Analyzed AWS CloudWatch logs to debug and improve AWS Lambda function calls`,
        `Managed resources for development and testing environments using AWS Amplify`,
        `Collaborated with other teams to develop an internal status tracking dashboard
         using React and Material UI`
      ]
    },
    {
      id: 2,
      title: 'Web Developer', 
      company: 'Knowledge Accelerators',  
      location: 'Saint Petersburg, FL',
      start: 'April 2016', 
      end: 'Nov 2021',
      duties: [
        `Developed new features and fixed bugs in .NET web forms and Angular Single Page Apps 
        for client production sites consisting of thousands of users`,
        `Converted .NET web forms pages to Angular components`,
        `Created .NET Web API 2 controllers for making HTTP REST requests`,
        `Developed data visualizations using Microsoft Graph API and Chart.js`,
        `Wrote and executed SQL scripts to create, delete, update, and read thousands of records
         of data`,
        `Created HTML emails and responsive homepage designs in HTML/CSS based on design mockups
         provided by clients`,
        `Implemented theme design requests using LESS and Bootstrap`,
        `Collaborated with other teams to improve the user experience and increase productivity
         within internal systems`,
      ]
    },
    {
      id: 1,
      university: 'University of South Florida', 
      degree: "Bachelor's",  
      study: 'Computer Science',
      graduationDate: 'Graduated: December 2015'
    }
  ])
}
