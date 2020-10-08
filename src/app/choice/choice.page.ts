import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HobbyService } from '../services/hobby.service';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {

  public hobby ;
  private select = [];
  constructor(private storage: Storage, private router: Router, private hobs: HobbyService) {

  }

  ngOnInit() {
    this.hobs.getHobby()
    .then(res => {
      this.hobby = res;
    })
    .then(() => {
      const hob = JSON.parse(this.hobby);
      this.hobby = hob;
      hob.forEach((val) => {
        const tmp = {
          name: val,
          ischecked: false
        };
        this.select.push(tmp);
        console.log(this.select);
      });
      return console.log('howbed');
    });
  }
  selected(event, item){
    this.select.forEach(el => {
      if (el.name === item){
        el.ischecked = event.detail.checked;
      }
    });
  }

  goNext(){
    // this.storage.set('hobby', this.select);
    // this.storage.set('ischecked', true);
    this.hobs.sendHobby(this.select)
    .then(() => {
      return this.router.navigate(['tabs']);
    });
  }
}
