import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signwithemail4',
  templateUrl: './signwithemail4.page.html',
  styleUrls: ['./signwithemail4.page.scss'],
})
export class Signwithemail4Page implements OnInit {

  @Input() accountfrm: FormGroup;
  @Input() birthday: string;
  @Input() check;
  @Input() howtoauth: string;

  passwordfrm: FormGroup;
  error_message = {
    'password': [
      { type: 'required', message: '패스워드를 입력해주세요.' },
      { type: 'minlength', message: '최소 8자 이상 입력해주세요.' },
      { type: 'maxlength', message: '최대 32자 미만 입력해주세요.' },
      { type: 'pattern', message: '올바르지 않은 패스워드입니다.' },
    ]
  };

  body;

  constructor(
    private signserv: SignupService,
    private authserv: AuthService,
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    public reactiveFormsModule: ReactiveFormsModule,
    private router: Router
    ) {
      this.passwordfrm = this.formBuilder.group({
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
          Validators.pattern('(?=.*\d)(?=.*[a-z]).{8,}')
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

  checkNsend(){
    if (this.howtoauth === 'phone'){
      this.body = {
        email: this.accountfrm.value.phone,
        howto: 'phone',
        password: this.passwordfrm.value.password,
        check: this.check,
        birthday: this.birthday
      };
    } else {
      this.body = {
        email: this.accountfrm.value.email,
        howto: 'email',
        password: this.passwordfrm.value.password,
        check: this.check,
        birthday: this.birthday
      };
    }
    this.signserv.signwithEmail(this.body);
    this.dismiss();
  }

}
