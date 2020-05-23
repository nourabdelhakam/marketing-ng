import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscrubeService {

  url= 'https://example.com/api/subscribe';
  constructor(private http: HttpClient) { }

  subscribe(email){
    return this.http.post(this.url,{email:email});
  }
 
}
