
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  // des:any = document.getElementsByClassName('informationInnerMain') as HTMLCollectionOf<HTMLElement>
  // des = document.querySelector<HTMLBodyElement>('.inner') 

  ngOnInit(): void {
    // console.log(this.des)
    // this.showDes()
  }

  // showDes(){
  //   this.des?.setAttribute('style','display:none')
  // }
}
