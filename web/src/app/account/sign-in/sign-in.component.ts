import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signin = {
    email: '',
    password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  async onSubmit() {
    document.querySelector('.validate').classList.add('hidden');
    try {
      await this.accountService.signIn(this.signin);
      this.router.navigate(['app']);
    } catch (error) {
      console.error(error);
      document.querySelector('.validate').classList.remove('hidden')
    }
  }

}
