import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers:[DataService]
})
export class ResultComponent implements OnInit {

  constructor(public dataService:DataService) { 
    this.data = this.dataService.data
  }

  ngOnInit(): void {
  }

  data:any
  

}
