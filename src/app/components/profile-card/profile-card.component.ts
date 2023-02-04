import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Users } from 'src/app/_model/users.model';
import { UploadService } from 'src/app/_services/upload.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  userInfo: Users = {
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
  profileImage: any = ''

  constructor(private userService: UserService,
    private uploadService: UploadService,
    private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    let user = this.userService.retrieveUser();
    this.userInfo = JSON.parse(user || '')

    this.uploadService.getAFile(this.userInfo.photoId).subscribe((response) => {
      let objectURL = URL.createObjectURL(response);
      this.profileImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }

}

