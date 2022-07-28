import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
    public router:Router,
    private navCtrl:NavController,
    
    
    ) {}



  
  btnlogin(){


    this.router.navigateByUrl('login')


  }
  btnsignup(){


    this.router.navigateByUrl('signup')


  }


}
