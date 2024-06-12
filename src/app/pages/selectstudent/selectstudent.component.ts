import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-selectstudent',
  templateUrl: './selectstudent.component.html',
  styleUrls: ['./selectstudent.component.scss']
})
export class SelectstudentComponent {

  constructor(private _router : Router){

      
  }
  handleClick(){
    this._router.navigate(["payment"])
  }

}
