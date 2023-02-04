import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/_model/users.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: Users[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchAllUsers().subscribe((response)=>{
      this.usersList = response
    })
  }

  blockUser(user: any) {
   console.log(user, 'user')
  }
}
