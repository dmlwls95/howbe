import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../services/personal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { apiurl } from 'src/app/services/Environments';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})

export class Tab6Page implements OnInit {

  public profileImage;
  constructor(private perserv: PersonalService, public dms: DomSanitizer, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  getProfileImage(){
    this.perserv.getProfileImage()
    .then(res => {
      const user_id = res;
      this.profileImage = `${apiurl}/profileimage/${user_id}/default.png`;
    });
  }

  ionViewWillEnter(){
    this.getProfileImage();
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['tabs/tab1']);
  }

}