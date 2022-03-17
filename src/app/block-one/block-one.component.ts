import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlockoneService } from '../services/blockone.service';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.css']
})
export class BlockOneComponent implements OnInit {

  test: BlockoneService = new BlockoneService(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','')
  // test!: BlockoneService 

  constructor(public http:HttpClient,
    public httpService:HttpService) { }

  ngOnInit(): void {
  }
  check(){
    console.log(this.test)
  }
  sendInfo(){
    this.httpService.sendBlockOne(this.test)
    .subscribe((data:any)=>{},error=>{console.log(error)})
  }

}
