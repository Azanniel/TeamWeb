import { Component, Inject } from '@angular/core';
import { Collaborator } from 'src/app/shared/models/collaborator.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorService } from 'src/app/shared/service/collaborator.service';

@Component({
  selector: 'app-dialog-collaborator',
  templateUrl: './dialog-collaborator.component.html',
  styleUrls: ['./dialog-collaborator.component.css']
})
export class DialogCollaboratorDialog {

  newCollaborator = {
    name: '',
    cpf: '',
    department: '',
    position: ''
  }

  constructor(
    public dialogRef: MatDialogRef<DialogCollaboratorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Collaborator,
    private collaboratorService: CollaboratorService
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  createCollaborator(){
    this.collaboratorService.create(this.newCollaborator).then(response => {
      this.dialogRef.close(true);
    });
  }

  updateCollaborator(){
    this.collaboratorService.update(this.data).then(response => {
      this.dialogRef.close('updated');
    });
  }

  deleteCollaborator(){
    this.collaboratorService.delete(this.data).then(response => {
      this.dialogRef.close('deleted');
    });
  }
}
