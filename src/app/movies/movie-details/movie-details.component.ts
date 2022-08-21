import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute, public dataService : DataService ,private location:Location) { }
movieDetails : any;
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.getMovieDetails(Number(id));
  }

  getMovieDetails(id:number){
    this.dataService.getMovieDetails(id).subscribe(details => {
      this.movieDetails = details;
      console.log(this.movieDetails)
    })
  }
goBack(){
this.location.back();
}
}
