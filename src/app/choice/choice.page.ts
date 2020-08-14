import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {

  public hobby = ['댄스', '요리', '달고나', '디저트'];
  private select = {};
  constructor(private storage: Storage, private router: Router) {

  }

  ngOnInit() {
    this.hobby.forEach((val) => {
      let tmp = {ischecked: false};
      this.select[val] = tmp;
    });
  }

  selected(event, item){
    this.select[item].ischecked = event.detail.checked;
  }

  goNext(){
    this.storage.set('hobby', this.select);
    this.storage.set('ischecked', true);
    this.router.navigate(['tabs']);
  }
}
