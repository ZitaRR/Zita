import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {
  authors: string[] = [];
  amount: number = 1;
  constructor(public api: ApiService) { }

  generateAuthors(): void{
    if(this.amount <= 0){
      alert("You must provide a number higher or equal to 1.");
      return;
    }
    this.authors = [];
    this.api.getAuthors(this.amount)
      .then(response => response.json()
      .then(data => {
        data.results.forEach(person => {
          this.authors.push(`${person.name.title}. ${person.name.last}, ${person.name.first}`);
        });
      }))
  }

  ngOnInit() {
  }

}
