import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

interface IUser {
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repaso_web';
  public users: IUser[] = [];

  // FormControl
  // FormGroup

  public name!: FormControl;
  public lastName!: FormControl;

  public form!: FormGroup;

  constructor() {
    this.initForm();
  }

  public saveUser() {
    this.users.push(this.form.value);
    console.log(this.users);
    this.form.reset();
  }

  public removeUser(id: number) {
    console.log("🚀  ~ AppComponent ~ removeUser ~ id:", id);
    const newUsers: IUser[] = [];
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if(i !== id) {
        newUsers.push(element);
      }
    }
    this.users = newUsers;
  }

  // SRP -> Principio de unica responsabilidad
  private initForm() {
    this.name = new FormControl("", [Validators.required, Validators.minLength(3)]);
    this.lastName = new FormControl("", [Validators.required, Validators.minLength(5)]);

    // Agrupar mis controladores
    this.form = new FormGroup({
      name: this.name,
      lastName: this.lastName
    });
  }
}
