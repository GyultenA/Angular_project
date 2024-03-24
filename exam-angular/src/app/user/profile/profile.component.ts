import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/shared/validator/email.validator';
import { ProfileDetails } from 'src/app/types/usersType';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

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

}
