import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from "uuid";
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogProgrammerComponent } from '../dialog-programmer/dialog-programmer.component';

interface Programmer {
  id: string
  name: string
  phone: string
  email: string
  rol: string
  tools: string[]
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void { }

  name: string = "";
  phone: string = "";
  email: string = "";
  rol: string = "";
  tools: string[] = [];

  programmers: Array<Programmer> = []
  
  /* Miscelaneous functions */
  completeSubmit(form :NgForm): void {
    form.reset();
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 2000});
  }

  openDialog(programmer: Programmer) {
    this.dialog.open(DialogProgrammerComponent, {data: {programmers: this.programmers, edit_programmer: programmer}});
  }

  /* CRUD FUNCTIONS */
  createProgrammer(): void {
    if (this.name != "" && this.phone != "" && this.email != "" && this.rol != "" && this.tools.length != 0) {
      let newProgrammer: Programmer = {
        id: uuidv4(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        rol: this.rol,
        tools: this.tools
      }
  
      this.programmers.push(newProgrammer);

      this.openSnackBar('Programmer created', 'Dismiss');
    } else {
      this.openSnackBar('Please, fill the required fields', 'Dismiss');
    }
  }

  deleteProgrammer(id: string): void {
    this.programmers = this.programmers.filter((programmer) => programmer.id != id);
    this.programmers.filter((p) => p.id == id);
    this.openSnackBar('Programmer deleted', 'Dismiss');
  }
}
