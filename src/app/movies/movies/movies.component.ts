import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  queryTxt : string = '';
  selectedPage: number = 1;
  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.dataService.getMovies(this.selectedPage).subscribe((x: any) => {
      this.movies = x
    })
  }

  openDetails(id: number) {
    this.router.navigate([`movie-details/${id}`]);
  }

  searchMovie(){
    this.dataService.searchMovie(this.selectedPage, this.queryTxt).subscribe(data => {
      this.movies = data;
    }, err => {
      alert(err.error.errors.join());
    })
  }

  setPage(pageNo: number) {
    this.selectedPage = pageNo;
    this.getMovies();
  }

  backPage() {
    this.selectedPage -= 1;
    this.getMovies();
  }

  nextPage() {
    this.selectedPage += 1;
    this.getMovies();
  }

  resetSearch(){
    debugger
    this.selectedPage = 1;
    this.queryTxt = '';
    this.getMovies();
  }

}
