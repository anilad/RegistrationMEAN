import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  user = new User();
  rUser;
  onSubmit(formData){
    this.users.push(this.user);
    this.rUser = this.user;
    this.user = new User();
    formData.reset();
  }
}
