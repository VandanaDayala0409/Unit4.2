import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getNonBowlers() {
    this.apiService.getNonBowlers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersHSGraterThan50() {
    this.apiService.getPlayersHSGraterThan50().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersAvgLessThan30() {
    this.apiService.getPlayersAvgLessThan30().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRightHandedBatsman() {
    this.apiService.getRightHandedBatsman().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getSpinBowlers() {
    this.apiService.getSpinBowlers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-non-bowlers') {
      this.getNonBowlers();
    } else if (value === 'get-players-hs-grater-than-50') {
      this.getPlayersHSGraterThan50();
    } else if (value === 'get-players-avg-less-than-30') {
      this.getPlayersAvgLessThan30();
    } else if (value === 'get-right-handed-batsman') {
      this.getRightHandedBatsman();
    } else if (value === 'get-spin-bowlers') {
      this.getSpinBowlers();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
