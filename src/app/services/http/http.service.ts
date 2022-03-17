import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockoneService } from '../blockone.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  sendBlockOne(test:BlockoneService){
    return this.http.post('/api/main/testone',test)
  }
}
