import { Component, OnInit, ViewChild } from '@angular/core';
import { ChoicePage } from '../choice/choice.page';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Button } from 'protractor';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public cnt = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  buttonON(){
    this.cnt = false;
  }

  goNext(){
    this.router.navigate(['choice']);
  }
}
