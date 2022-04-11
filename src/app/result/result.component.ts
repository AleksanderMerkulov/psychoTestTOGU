import { Component, OnInit } from '@angular/core';
import { BlockOneComponent } from '../block-one/block-one.component';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers:[BlockOneComponent]
})
export class ResultComponent implements OnInit {
  data:any
  temp:any
  constructor(public dataService:DataService,
    public blockone:BlockOneComponent){
    this.data = this.dataService.data
  }

  ngOnInit(): void {
    // this.data = this.dataService.data
    // console.log('newdata')
    // console.log(this.data)
  }

  
  

}
