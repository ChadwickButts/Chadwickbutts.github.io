import { Component, computed, signal } from '@angular/core';
import { SkillCard } from './skill-card/skill-card';

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

  skills = signal([
    { name: 'React', skill: 'React', years: 2, layer: [1, 2], img: 'images/skills/react_logo.svg' }
    , { name: 'Angular', skill: 'Angular', years: 3, layer: [1, 2], img: 'images/skills/angular_logo.svg' }
    , { name: 'JavaScript', skill: 'JavaScript', years: 7, layer: [1], img: 'images/skills/javascript_logo.svg' }
    , { name: 'TypeScript', skill: 'TypeScript', years: 2, layer: [1], img: 'images/skills/typescript_logo.webp' }
    , { name: 'NextJS', skill: 'NextJS', years: 0, layer: [1, 2], img: 'images/skills/nextjs_logo.svg' }
    , { name: 'GraphQL', skill: 'GraphQL', years: 0, layer: [1, 2, 3], img: 'images/skills/graphql_logo.svg' }
    , { name: 'Apollo', skill: 'Apollo', years: 0, layer: [1, 2, 3], img: 'images/skills/apollo_logo.svg' }
    , { name: 'LESS', skill: 'LESS', years: 2, layer: [1, 2], img: 'images/skills/less_logo.png' }
    , { name: 'HTML', skill: 'HTML', years: 7, layer: [1], img: 'images/skills/html_logo.svg' }
    , { name: 'CSS', skill: 'HTML', years: 7, layer: [1], img: 'images/skills/css_logo.svg' }
    , { name: '.NET', skill: 'dotNet', years: 3, layer: [3], img: 'images/skills/dotnet_logo.svg' }
    , { name: 'Node', skill: 'Node', years: 0, layer: [3], img: 'images/skills/node_logo.svg' }
    , { name: 'SQL/PostgreSQL', skill: 'SQL', years: 3, layer: [3], img: 'images/skills/sql_server_logo.png' }
    , { name: 'Java', skill: 'Java', years: 0, layer: [3], img: 'images/skills/java_logo.webp' }
    , { name: 'Amazon Cloudwatch', skill: 'AmazonCloudwatch', years: 1, layer: [4], img: 'images/skills/cloudwatch_logo.svg' }
    , { name: 'AWS Lambda', skill: 'AWSLambda', years: 1, layer: [4], img: 'images/skills/lambda_logo.svg' }
    , { name: 'Amazon API Gateway', skill: 'AmazonAPIGateway', years: 1, layer: [4], img: 'images/skills/apigateway_logo.svg' }
    , { name: 'AWS Amplify', skill: 'AWSAmplify', years: 1, layer: [4], img: 'images/skills/amplify_logo.svg' }
    , { name: 'Amazon S3', skill: 'AmazonS3', years: 1, layer: [4], img: 'images/skills/s3_logo.svg' }
    , { name: 'Jira', skill: 'Jira', years: 7, layer: [5], img: 'images/skills/jira_logo.svg' }
    , { name: 'GitLab', skill: 'GitLab', years: 2, layer: [5], img: 'images/skills/gitlab_logo.svg' }
    , { name: 'GitHub', skill: 'GitHub', years: 4, layer: [5], img: 'images/skills/github_logo.svg' }
    , { name: 'Git', skill: 'Git', years: 7, layer: [5], img: 'images/skills/git_logo.webp' }
  ])

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
