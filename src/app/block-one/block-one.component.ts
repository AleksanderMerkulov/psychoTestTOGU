import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockoneService } from '../services/blockone.service';
import { DataService } from '../services/data/data.service';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.css'],
  providers:[DataService]
})
export class BlockOneComponent implements OnInit {

  test: BlockoneService = new BlockoneService(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
  dataResult:any

  constructor(public http:HttpClient,
    public httpService:HttpService,
    public rout:ActivatedRoute,
    public router:Router,
    public dataServ:DataService,
    ) {
      this.dataServ.data;
      this.dataServ.test
    }

  ngOnInit(): void {
  }
  //работа со структурой DOM в ts
  // check(){
  //   let x = document.querySelectorAll('input')
  //   x.item(1).style.display = 'none'
  //   console.log(x)
  // }

  sendInfo(){
    this.dataServ.test = this.test
    this.httpService.sendBlockOne(this.test)
    .subscribe((data:any)=>{
      // console.log(data)
      this.dataServ.data = data
      // this.dataServ.test = this.test
      this.router.navigateByUrl('/result')
    },error=>{
      console.log("Ошибка отправки тестовой формы")
      console.log(error)
      console.log(this.test)
      alert('Возникла ошибка. Попробуйте ввести данные ещё раз')
    })
  }

}
