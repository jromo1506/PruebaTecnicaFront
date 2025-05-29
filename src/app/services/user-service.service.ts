import { Injectable } from '@angular/core';
import { GlobalApiService } from './global-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private api:GlobalApiService,private http:HttpClient) { }




  getUsuario():Observable<any>{
    return this.http.get(this.api.getUrl()+"");
  }

  getUsuarios():Observable<any>{
    return this.http.get(this.api.getUrl()+"");
  }

  addUsuario(user:any):Observable<any>{
    return this.http.post(this.api.getUrl()+"",user);
  }

  deleteUsuario():Observable<any>{
    return this.http.delete(this.api.getUrl()+"");
  }



}
