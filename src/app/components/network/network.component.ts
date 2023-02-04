import { Component, OnInit } from '@angular/core';
import { Friends } from 'src/app/_model/friends.model';
import { FriendsService } from 'src/app/_services/friends.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent  implements OnInit{
  
  myNetwork: Friends[] = [];
  statusClass: string = 'btn-primary'

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.fetchAllFriends().subscribe((response)=>{
      this.myNetwork = response
    })
  }

  setStatus(status:string): string{
    if(status =='Request Pending'){
       return 'btn-warning';
    }else if(status == 'You are friend' || status == 'You are Friend'){
      return 'btn-success';
    }else if(status == 'User Unfriended' || status == 'Request Cancelled"'){
       return 'btn-primary';
    }
    return 'btn-primary'
  } 

  sendFriendRequest(friend: any) {
    if(friend.status != 'You are friend' || friend.status != 'You are Friend'){
      this.friendsService.createFriendRequest(friend).subscribe(
        {
          next: (data: any) => true,
          error: (err: { message: any; }) => {
            alert(err.message)
          },
          complete: () => console.info('Friend Requst Sent!')
        })
    }
  }
}
