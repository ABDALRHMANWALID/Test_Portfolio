import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  password: string = "body2006";
  name: string = "abdo";
  loginForm!: FormGroup;

  // private toaster: ToastrService,
  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  login() {
    // console.log(this.loginForm);
    if (this.name == this.loginForm.value.name && this.password == this.loginForm.value.password) {
      this.router.navigate(["/"]);
    } else {
      alert(false);
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })
  }
}
