import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/shared/models/collaborator.model';
import { CollaboratorService } from 'src/app/shared/service/collaborator.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogCollaboratorDialog } from '../dialog-collaborator/dialog-collaborator.component';


@Component({
  selector: 'app-tab-collaborators',
  templateUrl: './tab-collaborators.component.html',
  styleUrls: ['./tab-collaborators.component.css']
})
export class TabCollaboratorsComponent implements OnInit {

  collaborators: Collaborator[] = [];
  departments = [];
  positions = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'department', 'position'];

  constructor(private collaboratorService: CollaboratorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCollaborators();
  }

  getCollaborators(){
    this.collaboratorService.list().then(response => {
      this.collaborators = response;
      this.getDepartments(this.collaborators);
      this.getPositions(this.collaborators);
    });
  }

  getDepartments(collaborators: Collaborator[]){
    this.departments = [];
    collaborators.map((collaborator) => {
      if (this.departments.indexOf(collaborator.department) === -1) {
        this.departments.push(collaborator.department);
      }
    });
  }

  getPositions(collaborators: Collaborator[]){
    this.positions = [];
    collaborators.map((collaborator) => {
      if (this.positions.indexOf(collaborator.position) === -1) {
        this.positions.push(collaborator.position);
      }
    });
  }

  dialogCollaborator(collaborator: Collaborator){
    this.openDialog(collaborator);
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogCollaboratorDialog, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCollaborators();
    });
  }

}
