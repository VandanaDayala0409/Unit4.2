import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  data: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }
  updatePlayer(
    _id: string,
    NameofPlayer: string,
    Batting: string,
    Bowling: string,
    HS: number,
    Avg: number
  ) {
    this.apiService
      .updatePlayer({
        _id: _id,
        NameofPlayer: NameofPlayer,
        Batting: Batting,
        Bowling: Bowling,
        HS: HS,
        Avg: Avg,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('updatePlayer', this.data);
      });
  }
  Update(
    _id: string,
    NameofPlayer: string,
    Batting: string,
    Bowling: string,
    HS: number,
    Avg: number
  ) {
    this.updatePlayer(_id, NameofPlayer, Batting, Bowling, HS, Avg);
    this.routes.navigate(['/dashboard']);
  }
}
