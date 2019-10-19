import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';
export class PhoneNumber {
  country: string = "+91";
  area: string;
  // prefix: string;
  // line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area
    return `+${num}`
  }

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  constructor(private win: WindowService, private router: Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    firebase.initializeApp(environment.firebase)
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // console.log(response);
      },
    },
    )
    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode() {
    // console.log('fn called')

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier).then(result => {
      // console.log(result, 'signedin')
      this.windowRef.confirmationResult = result;
    }).catch(error => console.log(error));

  }

  verifyLoginCode() {
    if (this.phoneNumber == null) {
      alert('please enter your mobile number')
    }
    else {
      this.windowRef.confirmationResult.confirm(this.verificationCode).then(result => {
        // console.log(result, 'verify')
        this.user = result.user;
        localStorage.setItem('loggedIn',this.user.uid)
        //  console.log(this.user.uid, 'user result')
        this.router.navigate(['/dashboard'])

      }, err => {
        alert('please enter valid otp')

      })
    }
  }

}
