import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ServiceFormsService } from '../../core/service-forms.service';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() greet = new EventEmitter<string>();
  @Input() rol = ' '
  
  serviceFormsService : ServiceFormsService = inject(ServiceFormsService)

  users : User[] = this.serviceFormsService.getUsers();

  user: string = 'Julius'

  existenciaUsuario: boolean = true


  messageParent() {
    this.greet.emit("Hi I'm your child")
  }

  
}
