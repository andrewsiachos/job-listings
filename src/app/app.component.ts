import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-listings';

  filters: string[] = [];

  jobs = [
    {
      id: 1,
      name: 'Photosnap',
      image: 'photosnap.svg',
      new: true,
      featured: true,
      title: 'Senior Frontend Developer',
      tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
      regionAndDate: ['1d ago', 'Full Time', 'USA only']
    },
    {
      id: 2,
      name: 'Manage',
      image: 'manage.svg',
      new: true,
      featured: true,
      title: 'Fullstack Developer',
      tags: ['Fullstack', 'Midweight', 'Python', 'React'],
      regionAndDate: ['1d ago', 'Part Time', 'Remote']
    },
    {
      id: 3,
      name: 'Account',
      image: 'account.svg',
      new: true,
      featured: false,
      title: 'Junior Frontend Developer',
      tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
      regionAndDate: ['2d ago', 'Part Time', 'USA only']
    },
    {
      id: 4,
      name: 'MyHome',
      image: 'myhome.svg',
      new: false,
      featured: false,
      title: 'Junior Frontend Developer',
      tags: ['Frontend', 'Junior', 'CSS', 'JavaScript'],
      regionAndDate: ['5d ago', 'Contract', 'USA only']
    },
    {
      id: 5,
      name: 'Loop Studios',
      image: 'account.svg',
      new: false,
      featured: false,
      title: 'Software Engineer',
      tags: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
      regionAndDate: ['1w ago', 'Full Time', 'Worldwide']
    },
    {
      id: 6,
      name: 'FaceIt',
      image: 'faceit.svg',
      new: false,
      featured: false,
      title: 'Junior Backend Developer',
      tags: ['Backend', 'Junior', 'Ruby', 'RoR',],
      regionAndDate: ['2w ago', 'Full Time', 'UK only']
    },
    {
      id: 7,
      name: 'Shortly',
      image: 'shortly.svg',
      new: false,
      featured: false,
      title: 'Junior Developer',
      tags: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
      regionAndDate: ['2w ago', 'Full Time', 'UK only']
    },
    {
      id: 8,
      name: 'Insure',
      image: 'insure.svg',
      new: false,
      featured: false,
      title: 'Junior Frontend Developer',
      tags: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
      regionAndDate: ['2w ago', 'Full Time', 'USA only']
    },
    {
      id: 9,
      name: 'Eyecam Co.',
      image: 'eyecam-co.svg',
      new: false,
      featured: false,
      title: 'Full Stack Engineer',
      tags: ['Fullstack', 'Midweight', 'JavaScript', 'Django', 'Python'],
      regionAndDate: ['3w ago', 'Full Time', 'Worldwide']
    },
    {
      id: 10,
      name: 'The Air Filter Company',
      image: 'the-air-filter-company.svg',
      new: false,
      featured: false,
      title: 'Front-end Dev',
      tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
      regionAndDate: ['1mo ago', 'Part Time', 'Worldwide']
    }
  ];

  temporaryArray = this.jobs;

  addTag(tagName: string){
    if(!this.filters.includes(tagName)){
      this.filters.push(tagName);
    }

    this.temporaryArray = this.temporaryArray.filter((x)=>{
      return x.tags.includes(tagName);
    });
  }

  removeTag(tagToRemove: string){
    this.filters.splice(this.filters.indexOf(tagToRemove), 1);
    this.temporaryArray = [];
    if(this.filters.length == 0){
      this.temporaryArray = this.jobs;
    }
    for(let filter of this.filters){
      for(let job of this.jobs){
        if(job.tags.includes(filter)){
          this.temporaryArray.push(job);
        }
      }
    }
  }
}
