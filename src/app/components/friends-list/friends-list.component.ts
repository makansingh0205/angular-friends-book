import { Component } from '@angular/core';
import { Friends } from 'src/app/_model/friends.model';
import { FriendsService } from 'src/app/_services/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  
  friendsList: Friends[] = [];

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.fetchAllFriends().subscribe((response)=>{
      this.friendsList = response
    })
  }

}
