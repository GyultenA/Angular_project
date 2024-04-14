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
    image: string | null,
    created: string,
    title: string,
    username: string,
    ___class: string,
    comment: string,
    ownerId: null,
    updated: number,
    objectId: string,
}

export interface SinglePost {
  title:string,
  comment:string,
  username:string,
  created:string,
  image: string | null
}

export interface UserPosts {
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
    email: string;
    img: string;
    username: string;
    password: string;
}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    objectId: string;
  }

  export interface ProfileDetails {
   // username: string;
    email: string;
    password: string;
  }

  export interface sPost {
    title: string,
   // imageFile: File,
   image?: string,
    comment: string,
    created: string,
  }

  export interface nPost {
   image: null,
		pass: string,
		created: string,
		repass: string,
		title: null,
		ownerId: null,
		___class: string,
		comment: null,
		updated:string,
		email: string,
		objectId: string,
		username: string,
    post: [
      title: string,
      comment: string,
    ]
  }