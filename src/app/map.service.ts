import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpComponent } from './help/help.component';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private Http:HttpClient) { }

  getMap(){
    return this.Http.get<HelpComponent>("")
  }
}
