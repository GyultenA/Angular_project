import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/shared/validator/email.validator';
import { ProfileDetails, UserPosts } from 'src/app/types/usersType';
import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;
  showMyPosts: boolean = false;

  userPosts: UserPosts[] | null = [];

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    
  });

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute) {}

    get userId(): string {
      return this.userService.user?.id || '';
    }
  
  ngOnInit(): void {
    const { username, email} = this.userService.user!;
    this.profileDetails = {
      username,
      email,
    };

    this.form.setValue({
      username,
      email,
    });

  }

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    //console.log(this.form.value)
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email} = this.profileDetails;
    
    this.userService.updateProfile(username, email)
    .subscribe(()=> {
      this.onToggle();
    })
    
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }

  onToggleMyPosts (): void{
     this.showMyPosts = !this.showMyPosts;
  }

  //showPosts(): void {
   // this.activeRoute.params.subscribe((data) => {
     // const id = data['ownerId'];
     // this.apiService.getUserPosts(id).subscribe((userPosts) => {
      //  this.userPosts= userPosts;
      //})
   // })
 // }


  myPosts(e:Event){
    e.preventDefault();
     this.onToggleMyPosts();
  }

  deletePost(e: Event){
    e.preventDefault();
    this.activeRoute.params.subscribe((data)=>{
      const id = data ['objectId'];

      this.apiService.deletePost(id)
    })
   
  }

}
