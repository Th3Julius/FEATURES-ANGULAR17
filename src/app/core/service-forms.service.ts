import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormsService {


  users : User[] = [
    {
      id: 1,
      name: 'Julius',
      age: 15,
      rol: 'software enginering'
    },
    {
      id: 2,
      name: 'Maria',
      age: 19,
      rol: 'software enginering'
    }
  ]

  constructor() { }

  getUsers() : User[] {
    return this.users
  }


}
