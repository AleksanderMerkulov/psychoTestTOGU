import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-pick',
  templateUrl: './block-pick.component.html',
  styleUrls: ['./block-pick.component.css']
})
export class BlockPickComponent implements OnInit {
  accOne:any = document.getElementById('disOne')
  accTwo:any = document.getElementsByClassName('disTwo')
  i:number=0
  infoOne='Lorem ipsum dolor sit amet, consectetur'
  constructor() { }

  ngOnInit(): void {
    
  }
  // openAccOne(){
  //   console.log(document.getElementById('disOne'))
  //     if(this.accOne.style.display === 'block'){
  //       this.accOne.style.display == 'none'
  //   } else{
  //     this.accOne.style.display = 'block'
  //     console.log('123')
  //   }
  // }
}
