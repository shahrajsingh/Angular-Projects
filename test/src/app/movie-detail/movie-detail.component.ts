import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  movie: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const api_key = '00120c71fafa0b093f088af0f0e1ef61';

      const id = 577922;
      this.http
        .get<{}>(
          'https://api.themoviedb.org/3/movie/' +
            id +
            '?api_key=' +
            api_key +
            '&language=en-US'
        )
        .subscribe((result: any) => {
          this.movie = result;
          console.log(this.movie);
        });
    });
  }
}
