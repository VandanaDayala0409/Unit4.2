import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getNonBowlers() {
    return this.http.get('http://localhost:3000/get-non-bowlers');
  }
  public getPlayersHSGraterThan50() {
    return this.http.get('http://localhost:3000/get-players-hs-grater-than-50');
  }
  public getPlayersAvgLessThan30() {
    return this.http.get('http://localhost:3000/get-players-avg-less-than-30');
  }
  public getRightHandedBatsman() {
    return this.http.get('http://localhost:3000/get-right-handed-batsman');
  }
  public getSpinBowlers() {
    return this.http.get('http://localhost:3000/get-spin-bowlers');
  }
}
