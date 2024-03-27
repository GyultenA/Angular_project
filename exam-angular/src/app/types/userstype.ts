//export interface Posts {
   // _id: string,
  //  created_at: string,
   // likes: number,
   // text: string,
   // title: string,
   // updatedAt: string,
  //  user_id: User,
//}

export interface Posts {
    image: string,
    created: string,
    title: string,
    username: string,
    ___class: string,
    comment: string,
    ownerId: null,
    updated: number,
    objectId: string,
}



export interface User {
    email: string,
    img: string,
    username: string,
    password: string,
}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    id: string;
  }

  export interface ProfileDetails {
    username: string;
    email: string;
   // password: string;
  }