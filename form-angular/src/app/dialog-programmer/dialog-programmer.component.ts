import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-programmer',
  templateUrl: './dialog-programmer.component.html',
  styleUrls: ['./dialog-programmer.component.css']
})
export class DialogProgrammerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  newName: string = this.data.edit_programmer.name;
  newPhone: string = this.data.edit_programmer.phone;
  newEmail: string = this.data.edit_programmer.email;
  newRol: string = this.data.edit_programmer.rol;
  newTools: string[] = this.data.edit_programmer.tools;

  updateProgrammer(): void {
    this.data.edit_programmer.name = this.newName
    this.data.edit_programmer.email = this.newEmail
    this.data.edit_programmer.phone = this.newPhone
    this.data.edit_programmer.tools = this.newTools
    this.data.edit_programmer.rol = this.newRol
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 2000});
  }
}
