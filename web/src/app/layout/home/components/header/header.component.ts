import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { DialogCollaboratorDialog } from '../dialog-collaborator/dialog-collaborator.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  openModalToNewCollaborator(){
    const dialogRef = this.dialog.open(DialogCollaboratorDialog, { width: '300px' });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        window.location.reload();
      }
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['']);
  }

}
