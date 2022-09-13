import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

type NewUser = {
  name: string,
  password: string,
  age: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  newUser!: NewUser; 


  constructor(private form_builder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.form_builder.group({
      nameInput: [''],
      passwordInput: [''],
      ageInput: ['']
    })

  }

  handleClick = () => {
    const nameInput = this.loginForm.controls['nameInput'].value;
    const passwordInput = this.loginForm.controls['passwordInput'].value;
    const ageInput = this.loginForm.controls['ageInput'].value;

    this.newUser = {
      name: nameInput,
      password: passwordInput,
      age: ageInput
    }

    console.log("Usuario", this.newUser);

    alert(`Nome: ${this.newUser.name} | Idade: ${ this.newUser.age} `)
  }

}
