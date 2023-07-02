import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  alluser: User[] = [];
 
  constructor(private userService: UserService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.userService.get().subscribe((data) => {
      this.alluser = data;
    });
  }
}
