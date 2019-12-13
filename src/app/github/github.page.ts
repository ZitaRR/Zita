import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {
  repos: {
    owner: string,
    name: string,
    description: string,
    language: string,
    languageIcon: string,
    href: string
  }[] = [];

  constructor(public api: ApiService){ 
    this.api.getRepos()
      .then(response => response.json()
      .then(data => {
        data.forEach(repo => {
          let icon: string;
          switch(repo.language){
            case "C#": icon = "devicon-csharp-line"; break;
            case "Python": icon = "devicon-python-plain"; break;
            case "JavaScript": icon = "devicon-javascript-plain"; break;
            case "TypeScript": icon = "devicon-typescript-plain"; break;
          }
          this.repos.push({
            owner: repo.owner.login,
            name: repo.name,
            description: repo.description || 'No Description',
            language: repo.language,
            languageIcon: icon,
            href: repo.html_url
          })
        });
      }))
  }

  onClick(href: string): void{
    window.open(href);
  }

  ngOnInit() {
  }

}
