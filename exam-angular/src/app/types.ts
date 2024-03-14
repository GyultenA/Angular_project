//export interface Posts {
 //   comment: string[];
  //  created: number;
  //  image: string;
   // name: string[];
   // objectId: string;
   // ownerId: null;
   // updated: number;
  //  ___class: string;
//}

//export interface User {
  //  created: number;
   // email: string;
   // fullname: string;
   // objectId: string;
   // ownerId: null;
   //// password: string;
   // repassword: string;
   // updated: number;
   // ___class: string;
//}

export interface User {
    themes: string[];
    posts: Post[];
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface UserForAuth {
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
  }

  export interface Post {
    likes: string[];
    _id: string;
    text: string;
    userId: User;
    themeId: Theme;
    created_at: string;
    updatedAt: string;
    __v: number;
  }
  

export interface Theme {
    subscribers: string[];
    posts: Post[];
    _id: string;
    themeName: string;
    userId: User;
    created_at: string;
    updatedAt: string;
    __v: number;
  }