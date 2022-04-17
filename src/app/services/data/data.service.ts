import { Injectable } from '@angular/core';
import { BlockoneService } from '../blockone.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data:any
  public test: BlockoneService  | undefined
  // public test: BlockoneService = new BlockoneService(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
  
  constructor() { }
}
