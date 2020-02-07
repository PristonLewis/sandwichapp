import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  public errFlag;
  constructor(private httpService: HttpService, private formBuilder: FormBuilder,
    private router: Router, private AuthService: AuthService) {

  }

  ngOnInit() {


    this.loginForm = this.formBuilder.group({

      uName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]


    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit(loginForm): void {

    this.submitted = true;
    console.log(this.loginForm.value);


    this.httpService.postRequest('users/userLogin', this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('userid', data.userId);
        localStorage.setItem('username', loginForm.value.uName);
        // this.AuthService.changeAuth(loginForm.value.uName);


      })
  }

}

