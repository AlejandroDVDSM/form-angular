import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from "uuid";

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

  constructor() { }

  ngOnInit(): void { }

  name: string = "";
  phone: string = "";
  email: string = "";
  rol: string = "";
  tools: string[] = [];

  programmers: Array<Programmer> = []
  
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
}
