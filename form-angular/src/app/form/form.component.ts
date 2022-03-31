import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from "uuid";
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar) { }

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

  /* CRUD FUNCTIONS */
  createProgrammer(): void {
    let newProgrammer: Programmer = {
      id: uuidv4(),
      name: this.name,
      phone: this.phone,
      email: this.email,
      rol: this.rol,
      tools: this.tools
    }

    this.programmers.push(newProgrammer);
    console.log(this.programmers)
  }

  deleteProgrammer(id: string): void {
    this.programmers = this.programmers.filter((programmer) => programmer.id != id)
  }
}
