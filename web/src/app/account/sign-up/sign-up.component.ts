import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signup = {
    username: '',
    email: '',
    password: ''
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  getErrorMessage(){
    if (this.email.hasError('required')) {
      return 'Deve ter um email';
    }

    return this.email.hasError('email') ? 'Email não é válido' : '';
  }

  async onSubmit() {
    try {
      const response = await this.accountService.signUp(this.signup);
      if(response.id){
        this.router.navigate(['app']);
      }
    } catch (error) {
      console.error(error);
      document.querySelector('.validate-email').classList.remove('hidden')
    }
  }

}
