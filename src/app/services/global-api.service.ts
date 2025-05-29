import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {


  apiUrl:string ="";

  constructor() { }

  public getUrl(){
    return this.apiUrl;
  }
}
