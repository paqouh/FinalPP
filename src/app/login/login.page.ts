import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
AlertController




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 userEmail;
 userPassword; 
 data;

constructor(

private navCtrl:NavController,
public activatedRoute:ActivatedRoute,
public router:Router,
private alertController: AlertController

  ){

   
  }




 async btnClicked(){


  
  this.data = this.activatedRoute.snapshot.paramMap.get('credentials');

  let con = JSON.parse(this.data);

  let Fname = con.Full_Name;
  let Email = con.Email;
  let Password = con.Password;

  
  if(this.userEmail == Email && this.userPassword == Password){

    const alert = await this.alertController.create({
      header: 'Hooray!',
      message: 'Login Successful!',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigateByUrl('menu/'+ this.data);
  
  }else{
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Wrong Credentials!',
      buttons: ['OK']
    });

    await alert.present();
  }
    }
    
    getId(val) {
      console.log(val)
    }
 



  ngOnInit() {

    
  }
  
}
