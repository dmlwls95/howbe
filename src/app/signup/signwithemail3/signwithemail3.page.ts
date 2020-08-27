import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { enterAnimation, leaveAnimation } from 'src/app/animations/modalanim';
import { Signwithemail4Page } from 'src/app/signup/signwithemail4/signwithemail4.page';

@Component({
  selector: 'app-signwithemail3',
  templateUrl: './signwithemail3.page.html',
  styleUrls: ['./signwithemail3.page.scss'],
})
export class Signwithemail3Page implements OnInit {

  @Input() birthday: string;
  @Input() check;

  accountfrm: FormGroup;
  error_message = {
    'email': [
      { type: 'required', message: '이메일 주소를 적어주세요.' },
      { type: 'minlength', message: '최소 6자 이상 입력해주세요.' },
      { type: 'maxlength', message: '최대 30자 미만 입력해주세요.' },
      { type: 'pattern', message: '올바르지 않은 이메일입니다.' },
    ]
  };

  constructor(public modalController: ModalController, public formBuilder: FormBuilder, public reactiveFormsModule: ReactiveFormsModule) {
    this.accountfrm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]))
    });
   }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async nextPage() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: Signwithemail4Page,
      enterAnimation,
      leaveAnimation,
      componentProps: {
        accountfrm: this.accountfrm,
        check: this.check,
        birthday: this.birthday
      }
    });
    return await modal.present();
  }



}
