import { Component } from '@angular/core';
import *  as moment from 'moment';
import { Ifiles, Iplayers } from './shared/model/data';
import { cricketers } from './shared/const/players';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
searchByValue !:string;
backgroundUrl : string = 'assets/green.avif'

  filesArray :Array<Ifiles> =[
    {
      name:"Form 16",
      size:20002234343,
      type:"pdf"
    },
    {
      name:"Salary slip",
      size:22345663,
      type:"pdf"
    },
    {
      name:"TDC",
      size:23467909,
      type:"pdf"
    }
  ];


  playersArray: Iplayers[] = cricketers;



  
 




}