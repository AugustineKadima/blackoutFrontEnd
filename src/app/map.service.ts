import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashHomeComponent } from './dash-home/dash-home.component';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private Http:HttpClient) { }

  getMap(){
    return this.Http.get<DashHomeComponent>("")
  }
}
