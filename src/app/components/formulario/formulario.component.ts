import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  favoriteFramework : string = ' '

  loginFrom = new FormGroup ({
    name : new FormControl ('',Validators.required),
    email : new FormControl ('', Validators.required),
  });

  handleFormSub() : void {
    console.log(this.loginFrom.value)
  }
}
