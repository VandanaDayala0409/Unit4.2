import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  registerPlayer(
    NameofPlayer: string,
    Batting: string,
    Bowling: string,
    HS: number,
    Avg: number
  ) {
    this.apiService
      .addPlayer({
        NameofPlayer: NameofPlayer,
        Batting: Batting,
        Bowling: Bowling,
        HS: HS,
        Avg: Avg,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
    this.routes.navigate(['/dashboard']);
  }
  Register(
    NameofPlayer: string,
    Batting: string,
    Bowling: string,
    HS: number,
    Avg: number
  ) {
    this.registerPlayer(NameofPlayer, Batting, Bowling, HS, Avg);
  }
}
