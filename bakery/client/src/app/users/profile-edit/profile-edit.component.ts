import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/types/user.type';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/utils/email_validator';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user = {} as UserDetails;
  showProduct: boolean = false;
  profileDetails: UserDetails = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    avatar: "",
    aboutMe: "",
  }

  constructor(
    private userApi: UserService,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  get currentUser(): string | undefined {
    return this.userApi.currentUsername
  }

  get currentUserId(): string | undefined {
    return this.userApi.currentUserId;
  }

  editUserForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    username: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_-]+$')]],
    email: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(50), emailValidator(EMAIL_DOMAINS),]],
    avatar: [
      '',
      [
        Validators.required,
        Validators.pattern(/https?:\/\/.+\.(jpg|jpeg|png|gif)/i),
      ],
    ],
    aboutMe: ['', [Validators.maxLength(800)]],
  })


  ngOnInit(): void {
    const userId = this.currentUserId;

    if (userId) {
      this.userApi.getMyUser(userId).subscribe((user) => {
        this.user = user;

        const { firstName, lastName, username, email, avatar, aboutMe } = this.user;
        this.editUserForm.patchValue({
          firstName, lastName, username, email, avatar, aboutMe
        })
        // console.log('oninit')
      })
    }
  }

  onEditUser() {
    if (this.editUserForm.invalid) {
      return;
    }


    this.profileDetails = this.editUserForm.value as UserDetails;

    const userId = this.currentUserId || ""

    const { firstName, lastName, username, email, avatar, aboutMe } = this.profileDetails;

    const updatedFields = this.getUpdatedFields(this.user, this.editUserForm.getRawValue());


    this.userApi.editMyUser(userId, updatedFields).subscribe(() => {
      this.router.navigate(['/user/profile'])
    })
  }


  onEditUserTwo() {
   // console.log('Edit form submitted');
    if (this.editUserForm.invalid) {
      console.error("Form is invalid", this.editUserForm.errors);
      return;
    }
    const userId = this.currentUserId || "";
    const updatedFields = this.getUpdatedFields(this.user, this.editUserForm.getRawValue());

    this.userApi.editMyUser(userId, updatedFields).subscribe({
      next: () => {
       // console.log('User updated successfully');
        this.router.navigate([`/user/profile/${userId}`]);
      },
      error: (err) => {
        console.error('Error updating user:', err);
      }
    });
  }

  getUpdatedFields(original: any, updated: any) {
    const updatedFields: any = {};
    for (const key in original) {
      if (updated.hasOwnProperty(key) && original[key] !== updated[key]) {
        updatedFields[key] = updated[key];
      }
    }
    return updatedFields;
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.editUserForm.get(controlName);
    if (control?.errors?.['required']) return `${controlName} is required!`;
    if (control?.errors?.['minlength']) return `${controlName} should be at least ${control.errors['minlength'].requiredLength} characters long!`;
    if (control?.errors?.['maxlength']) return `${controlName} should be no more than ${control.errors['maxlength'].requiredLength} characters long!`;
    if (control?.errors?.['pattern']) return `Invalid format for ${controlName}!`;
    return null;
  }


}





