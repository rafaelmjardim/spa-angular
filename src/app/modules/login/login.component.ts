import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

type NewUser = {
  nome: string,
  password: string
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
      passwordInput: ['']
    })

  }

  handleClick = () => {
    const nameInput = this.loginForm.controls['nameInput'].value;
    const passwordInput = this.loginForm.controls['passwordInput'].value;

    this.newUser = {
      nome: nameInput,
      password: passwordInput
    }

    console.log("Usuario", this.newUser);
  }

}