import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';
import { ILogin } from 'src/app/utils/models/account';
import { IErrorResponse } from 'src/app/utils/models/response';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imagePath: string = 'assets/logo_blue.png'

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null,Validators.required)
  });

  constructor(private alertService: AlertService, private accountService: AccountService, private router: Router) {
   }

  ngOnInit(): void {
    if(this.accountService.isAuthenticated()){
      this.accountService.doLoginNavigate();
    }
  }

  doLogin(){
    
    this.router.navigate(['/admin']);
    return;

    if(this.loginForm.invalid){

      this.alertService.showWarningAlert('Campos Incompletos','Debe completar todos los campos obligatorios.')
      return;
    }

    const model: ILogin = this.loginForm.getRawValue();

    this.accountService.doLogin(model).subscribe({
      next: (res)=>{
        
        if(!res.succeded){
          res.warnings.forEach(warn=>{
            this.alertService.showWarningAlert('',warn);
          })

          return;
        }

        this.accountService.setToken(res.singleData.token);
        this.accountService.doLoginNavigate();

      },
      error: (err)=>{
        if (err?.error instanceof IErrorResponse) {
          // Error del backend
          const errorResponse: IErrorResponse = err.error as IErrorResponse;
          if (errorResponse?.Message) {
            this.alertService.showErrorAlert('', errorResponse?.Message);
          }
          errorResponse?.Details?.forEach(err => {
            this.alertService.showErrorAlert(err?.Title, err?.Message);
          })
        } else {
          // Error del cliente o de red
          this.alertService.showErrorAlert('Ha ocurrido un error inesperado', err?.error?.message);
        }
      }
    })

  }

}
