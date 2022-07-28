import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


data;

  constructor(

    private navCtrl:NavController,
    public activatedRoute:ActivatedRoute

  ) {

  this.data = this.activatedRoute.snapshot.paramMap.get('id');

  let con = JSON.parse(this.data);

  
  let Fname = con.Full_Name;
  console.log(Fname);
 

 
   }


try_check(){

 
}


  ngOnInit() {
  }
  

}
