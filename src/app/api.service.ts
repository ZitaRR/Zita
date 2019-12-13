import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly user: string = "https://randomuser.me/api/?results=";
  private readonly repos: string = "https://api.github.com/users/ZitaRR/repos";
  constructor() { }
  getAuthors(amount: number = 1): any{
    return fetch(this.user + amount);
  }
  getRepos(): any{
    return fetch(this.repos);
  }
}
