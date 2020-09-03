import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public isloggedIn = false;
  constructor(private auth: AuthService, private router: Router) {

  }


  test(){
  }

  ionViewWillEnter(){
    console.log('ionviewwillenter');
    this.auth.authenticationState.subscribe((val) => {
      if (val){
        this.isloggedIn = true;
        this.router.navigate(['tabs/tab1']);
      } else {
        this.isloggedIn = false;
      }
    });
  }

}
