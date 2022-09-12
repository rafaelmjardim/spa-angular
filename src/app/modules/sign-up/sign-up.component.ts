import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

type NewUser = {
  name: string;
  number: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 signForm!: FormGroup;
 newUser!: NewUser;

  constructor(private form_builder: FormBuilder) { }

  ngOnInit(): void {

    // alert('Componente renderizou!');

    this.signForm = this.form_builder.group({
      nameInput: [''],
      mobileNumberInput: [''],
      emailInput: [''],
      passwordInput: ['']
    });

  }

  handleClick = () => {

    const nameInput = this.signForm.controls['nameInput'].value;
    const mobileNumberInput = this.signForm.controls['mobileNumberInput'].value;
    const emailInput = this.signForm.controls['emailInput'].value;
    const passwordInput = this.signForm.controls['passwordInput'].value;

    this.newUser= {
      name: nameInput,
      number: mobileNumberInput,
      email: emailInput,
      password: passwordInput
    }

    console.log('Novo Usuário:', this.newUser);
  }

}
