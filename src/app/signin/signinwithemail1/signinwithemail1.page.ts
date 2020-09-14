import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides  } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { enterAnimation, leaveAnimation } from 'src/app/animations/modalanim';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Signinwithemail2Page } from '../signinwithemail2/signinwithemail2.page';

@Component({
  selector: 'app-signinwithemail1',
  templateUrl: './signinwithemail1.page.html',
  styleUrls: ['./signinwithemail1.page.scss'],
})
export class Signinwithemail1Page implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  public isrightPhone = 'reject';
  accountfrm: FormGroup;
  phonefrm: FormGroup;
  checknum: FormGroup;
  howtoauth;
  error_message = {
    'email': [
      { type: 'required', message: '이메일 주소를 적어주세요.' },
      { type: 'minlength', message: '최소 6자 이상 입력해주세요.' },
      { type: 'maxlength', message: '최대 30자 미만 입력해주세요.' },
      { type: 'pattern', message: '올바르지 않은 이메일입니다.' },
    ],
    'phone': [
      { type: 'required', message: '휴대폰 번호를 적어주세요' },
      { type: 'minlength', message: '최소 8자 이상 입력해주세요.' },
      { type: 'maxlength', message: '최대 12자 미만 입력해주세요.' },
      { type: 'pattern', message: '올바르지 않은 번호입니다.' },
    ]
  };


  slideOpts = {
    allowTouchMove: false
  };

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    public reactiveFormsModule: ReactiveFormsModule,
    private auth: AuthService
    ) {
    this.howtoauth = 'phone';
    this.accountfrm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]))
    });

    this.phonefrm = this.formBuilder.group({
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]))
    });

    this.checknum = this.formBuilder.group({
      checknumber: new FormControl(''),
      phone: new FormControl('')
    });
   }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  sendsmsauth(){
    this.isrightPhone = 'pending';
    this.auth.sendSMSauth(this.phonefrm.value.phone, true)
    .then(res => {
      this.isrightPhone = 'pending';
    })
    .catch(err =>{
      this.isrightPhone = 'reject';
    });
  }

  checksmsauth(){
    this.checknum.patchValue({phone: this.phonefrm.value.phone});
    this.auth.authNumber(this.checknum.value)
    .then(res => {
      this.nextPage(this.howtoauth);
    });
  }

  async nextPage(how) {
    this.dismiss();
    let tmp;
    if (how === 'phone'){
      tmp = this.phonefrm;
    } else {
      tmp = this.accountfrm;
    }
    const modal = await this.modalController.create({
      component: Signinwithemail2Page,
      enterAnimation,
      leaveAnimation,
      componentProps : {
        accountfrm: tmp,
        howtoauth: how
      }
    });
    return await modal.present();
  }

  ionViewWillEnter(){
    this.slides.update();
  }

  presentemail(){
    this.howtoauth = 'email';
    this.slides.slideNext();
  }

  presentphone(){
    this.howtoauth = 'phone';
    this.slides.slidePrev();
  }


}
