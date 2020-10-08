import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides  } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { enterAnimation, leaveAnimation } from 'src/app/animations/modalanim';
import { Signwithemail4Page } from 'src/app/signup/signwithemail4/signwithemail4.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SignupService } from 'src/app/services/signup.service';
@Component({
  selector: 'app-signwithemail3',
  templateUrl: './signwithemail3.page.html',
  styleUrls: ['./signwithemail3.page.scss'],
})
export class Signwithemail3Page implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  @Input() birthday: string;
  @Input() check;

  public isrightPhone = 'reject';
  accountfrm: FormGroup;
  phonefrm: FormGroup;
  checknum: FormGroup;
  howtoauth;
  error_message = {
    email: [
      { type: 'required', message: '이메일 주소를 적어주세요.' },
      { type: 'minlength', message: '최소 6자 이상 입력해주세요.' },
      { type: 'maxlength', message: '최대 30자 미만 입력해주세요.' },
      { type: 'pattern', message: '올바르지 않은 이메일입니다.' },
    ],
    phone: [
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
    private auth: AuthService,
    private signup: SignupService
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
    this.signup.sendSMSauth(this.phonefrm.value.phone, false)
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
      this.isrightPhone = 'resolve';
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
      component: Signwithemail4Page,
      enterAnimation,
      leaveAnimation,
      componentProps : {
        accountfrm: tmp,
        howtoauth: how,
        check: this.check,
        birthday: this.birthday
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
