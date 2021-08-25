import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  apiKey: String = environment.Apikey

  constructor(private Http:HttpClient) { }

  getMapFromGoogle(){
    return this.Http.get("")
  }
}
