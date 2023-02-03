import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/_model/posts.model';
import { PostsService } from 'src/app/_services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPosts: Posts[] = [];

  constructor(private postsService: PostsService, private router: Router ) { }

  ngOnInit(): void {
    this.postsService.fetchAllPosts().subscribe((response)=>{
      console.log(response, 'posss')
    })
  }

  // goToViewBusSeats(busId: number){
  //   this.router.navigate(['bus-list', busId]);
  // }

  // searchBus(eventData: { leavingFrom: number, goingTo: number, departureDate: string}) {
  //   this.busService.searchBus(eventData.leavingFrom, eventData.goingTo).subscribe((response)=>{
  //     this.allBus = response;
  //   })
  // }
}
