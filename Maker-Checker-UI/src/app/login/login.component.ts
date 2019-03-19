import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {LoginData} from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  loginData: LoginData;
  currentRole: string;
  username = this.username;
  password = this.password;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }


onSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) {
    alert ('Invalid Logon !!!');
    // console.log('Invalid Logon ' );
    return;
  }
  console.log('Input value ' +  this.username + ' ' + this.password);
  this.loginService.userLogin(this.username, this.password)
      .subscribe( data => {
        this.loginData = data;

        if (data as unknown as number === 1) {
          this.currentRole = 'Maker';
        } else {
          this.currentRole = 'Checker';
        }
        localStorage.removeItem('currRole');
        localStorage.removeItem('username');
        localStorage.setItem('currRole', this.currentRole);
        localStorage.setItem('username', this.username);
        localStorage.setItem('flag', 'NO');
        this.router.navigate(['form-list']);
      });

  // if (localStorage.getItem('role') !== null) {
  //   console.log('Routing...');
  //  this.router.navigate(['form-list']);
  // } else {
  //   alert ('Invalid Logon...!');
  // }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

}
