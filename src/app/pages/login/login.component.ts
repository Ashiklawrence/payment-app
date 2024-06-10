import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _router:Router){}
  handleLogin(){
    console.log('handle login');
    
    this._router.navigate(['selectstudent'])

  }

}
