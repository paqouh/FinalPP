import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

Fname;
Email;
Password;
C_Password;
  

  constructor(
    private navCrtl:NavController,
    public router:Router
  ) { }

  ngOnInit() {

  }



btnClicked(){


  let info = {
    'Full_Name' : this.Fname,
    'Email' : this.Email,
    'Password' : this.Password,
    'C_Password' : this.C_Password
  }


  this.router.navigateByUrl('login/'+JSON.stringify(info));


}

}
