import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  joke:any;
  categories:any;
  // category:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.chucknorris.io/jokes/categories')
    .subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  getRandomJoke(){
    this.http.get('https://api.chucknorris.io/jokes/random')
    .subscribe(joke => {
      this.joke = joke;
      console.log(this.joke);
    });
  }
  onChange(category){
    this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .subscribe(joke => {
      this.joke = joke;
    });
  }
}
