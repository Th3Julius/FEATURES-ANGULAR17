import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { EventEmitter } from 'stream';
import { CommentsComponent } from './components/comments/comments.component';
import { NgOptimizedImage } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CommentsComponent,
    NgOptimizedImage,
    FormularioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  city : string = 'a Peru'
  message = ''
  childsMesssage = ''
  OnClick(){
    console.log('wuenas')
  }
  saludo(){
    this.message = 'way to go 🚀'
  }


  recibirMessage($event : string) : void {
    this.childsMesssage = $event
  }
 
}
