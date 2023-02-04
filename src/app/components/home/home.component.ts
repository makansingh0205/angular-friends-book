import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Posts } from 'src/app/_model/posts.model';
import { Users } from 'src/app/_model/users.model';
import { PostsService } from 'src/app/_services/posts.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPosts: Posts[] = [];
  postForm: FormGroup = new FormGroup({
    post: new FormControl('')
  });
  submitted:boolean = false;
  userInfo:Users={
    isAdmin: false,
    isActive: false,
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    photoId: '',
    createdDate: '',
    token: ''
  }

  constructor(private postsService: PostsService,
    private userService: UserService,
    private fb: FormBuilder, ) { }

  ngOnInit(): void {
    this.postsService.fetchAllPosts().subscribe((response)=>{
      this.allPosts = response
    })
    this.postForm = this.fb.group({
      post: ['', [Validators.required]]
    })

    let user = this.userService.retrieveUser();
    this.userInfo = JSON.parse(user || '')
  }
  onSubmit(){
    this.submitted = true
      
    if (this.postForm.valid) {
     
      let postData ={
        ...this.userInfo,
        ...this.postForm.value
      } 
      
      this.postsService.createAPosts(postData).subscribe(
        {
          next: (data: any) => {this.postForm.reset()},
          error: (err: { message: any; }) => {
            alert(err.message)
          },
          complete: () => console.info('Post Created')
        });
    }
  }

}
