import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { nPost, sPost } from 'src/app/types/usersType';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postuser',
  templateUrl: './postuser.component.html',
  styleUrls: ['./postuser.component.css']
})
export class PostuserComponent {
  showMyPosts: boolean = false;
  empty: boolean = false;
  isLoading: boolean = true;
  private userId: string | undefined;

  spost: sPost [] |null = []

  npost: nPost [] | null = []





  constructor(private apiService: ApiService, 
    private userService: UserService, 
    private activeRoute: ActivatedRoute){

    this.userService.user$.subscribe(user => {
      this.userId = user?.objectId;
      console.log(this.userId)
  })
  }



   // let id = this.userId || "";
    //this.apiService.getUsPost(id).subscribe((userPosts)=>{
      /// console.log(userPosts)
      //   this.spost = userPosts
   // })

  // let id = this.userId || "";

 // this.apiService.getUsPost(id).subscribe((data) =>{
   // console.log(data)
  //})

    

  //onToggleMyPosts (): void{
   // this.showMyPosts = !this.showMyPosts;
// }

 //showPosts():void{
//
 // this.apiService.getAllposts2().subscribe((npost) => {
  //  this.npost= npost;
    // console.log(npost)
 
   //})

  // this.apiService.getUsPost(id).subscribe((data)=>{
    // console.log(data)
  // })

  // let id = this.userId || "";
 //this.apiService.getUserPosts(id).subscribe((spost)=>{
 // console.log(spost, 2)
  //this.spost = spost;
  
   // console.log(this.spost)
    //console.log(this.spost.keys)
   // console.log(this.spost.values.arguments)
   
      

    //  let iterablelist = Object.keys(this.sPost)
     // console.log(iterablelist)
// })
  //this.activeRoute.params.subscribe((data)=>{
 //  console.log(data)
  // this.apiService.getPosts().subscribe((data)=>{
    // console.log(data)

   // this.onToggleMyPosts();
   //  console.log()
   //})
  //})
 }

// myPosts(e:Event){
 // e.preventDefault();
 // this.onToggleMyPosts();
// }

 //deletePost(e: Event){
 // e.preventDefault();
  //let id = this.userId || "";
  //this.activeRoute.params.subscribe((data)=>{
   // const id = data ['objectId'];
   // const com = data ['comment']

  //  this.apiService.deletePost(id)
  //})
 
//}

//}
