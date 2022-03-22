import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BlockPickComponent } from './block-pick/block-pick.component';
import { BlockOneComponent } from './block-one/block-one.component';
import { BlockTwoComponent } from './block-two/block-two.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

export const appRout:Routes=[
  {path:'', component:MainComponent},
  {path:'test', component:BlockOneComponent},
  // {path:'block/one', component:BlockOneComponent},
  // {path:'block/two', component:BlockTwoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlockPickComponent,
    BlockOneComponent,
    BlockTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
