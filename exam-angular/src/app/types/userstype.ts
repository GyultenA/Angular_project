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
    created: number,
    name: string,
    ___class: string,
    comment: string,
    ownerId: null,
    updated: number,
    objectId: string,
}



export interface User {
    email: string,
    img: string,
    name: string,
    password: string,
}

export interface UserForAuth {
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
  }