import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS, emailValidator } from 'src/app/shared/validator/email.validator';
import { ProfileDetails, UserPosts, nPost } from 'src/app/types/usersType';
import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;
  showMyPosts: boolean = false;
  empty: boolean = false
  private userId: string | undefined;

  username: string | undefined;

  userPosts: UserPosts[] | null = [];
  npost: nPost [] |null = []
 

  

  profileDetails: ProfileDetails = {
    password: '',
    email: '',
  };

  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    
  });



  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
  private router: Router) {

      this.userService.user$.subscribe(user => {
        this.userId = user?.objectId;
        this.username = user?.username
      //  console.log(this.userId)
    })

    }

   // get userId(): string {
     // console.log(this.userService.user?.objectId)
     // return this.userService.user?.objectId || '';
  //  }
  
  ngOnInit(): void {
    //const email = this.userService.user!
    const {email,password}= this.userService.user!;
   //console.log(this.userService.user!)
 
   
  
    this.profileDetails = {
      password,
      email,
    };

    this.form.setValue({
      password,
      email,
    });

    //this.activeRoute.params.subscribe((data)=>{
     // console.log(data)
      
   // })
   let id = this.userId || "";
   console.log(id)

   this.apiService.getAllposts2().subscribe((data) => {
     //console.log(data, 'this 2')
   //  console.log(data[3])
    // this.npost= data
    })

    this.apiService.getAllUserPost(id).subscribe((data) => {
     // console.log(data[3])
    let us= Object.values(data)
    console.log(us)
    })

  //  let id = this.userId || "";
  //  this.apiService.getUsPost(id).subscribe((userPosts)=>{
    //   console.log(userPosts)
        // this.nPost = userPosts
  //  })
   
       //console.log(email, pass)

       // console.log(this.form.value)
        //console.log(this.form.controls)
       // console.log(this.form.value.email)

      
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
    const { password, email} = this.profileDetails;
    
    this.userService.updateProfile(password, email)
    .subscribe(()=> {
      this.onToggle();
    })
    
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }

  deleteUser(e: Event): void{
    e.preventDefault()
    let id = this.userId || ""
    this.userService.deleteuser(id).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }

 //onToggleMyPosts (): void{
   //  this.showMyPosts = !this.showMyPosts;
 // }

  //showPosts():void{

  

   // this.apiService.getUsPost(id).subscribe((data)=>{
     // console.log(data)
   // })

  //  let id = this.userId || "";
  //this.apiService.getUsPost(id).subscribe((userPosts)=>{
   //  console.log(userPosts)
     //  this.nPost = userPosts

      // let iterablelist = Object.keys(this.nPost)
       //console.log(iterablelist)
  //})
   //this.activeRoute.params.subscribe((data)=>{
  //  console.log(data)
   // this.apiService.getPosts().subscribe((data)=>{
     // console.log(data)

    // this.onToggleMyPosts();
    //  console.log()
    //})
   //})
//  }

  //showPosts(): void {
   // this.activeRoute.params.subscribe((data) => {
     // const id = data['ownerId'];
     // this.apiService.getUserPosts(id).subscribe((userPosts) => {
      //  this.userPosts= userPosts;
      //})
   // })
 // }

// myPosts(e:Event){
 // e.preventDefault();
  ///let id = this.userId || "";
 // this.apiService.getUsPost(id).subscribe((userPosts)=>{
   //  console.log(userPosts)
    //   this.nPost = userPosts
     //  console.log(userPosts.length)
     //  let iterablelist = Object.keys(this.nPost)

      // if(this.nPost === null){
       // this.empty= true
      // }
      

  //this.activeRoute.params.subscribe((data) => {
   // let objid = data['objectId']



   // if(id===objid){
     // this.apiService.getUsPost(id).subscribe((userPosts)=>{
     //   console.log(userPosts)
        //this.nPost = userPosts
     // })
   // }
    
    
    
 // })




 }

 // myPosts(e:Event){
  //  e.preventDefault();
   // console.log(Event)
  //  this.activeRoute.params.subscribe((data)=>{
   //   console.log(data['email'])
    //  console.log(data[0])
      //this.apiService.getUsPost().subscribe((data)=>{
       // console.log(data.email)
       // console.log(data['email'])
       //let email = data.email
      // let pass = data.pass
      // let em = data['email']

       //console.log(em)

       //console.log(email, pass)

       // console.log(this.form.value)
        //console.log(this.form.controls)
       // console.log(this.form.value.email)

    //  })
    // })

   




    // this.onToggleMyPosts();
  //}



 

