import { Component, OnInit } from '@angular/core';
import { BlockoneService } from '../services/blockone.service';

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.css']
})
export class BlockOneComponent implements OnInit {

  test: BlockoneService = new BlockoneService(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'','')
  // test!: BlockoneService 

  constructor() { }

  ngOnInit(): void {
  }
  check(){
    console.log(this.test)
  }
  sendInfo(){

  }

}
