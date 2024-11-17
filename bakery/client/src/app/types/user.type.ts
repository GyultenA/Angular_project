import { Product } from "./product.type";
import { Comment } from "./comment.type";


export interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    aboutMe: string;
    productOwner: Product[];
    commentOwner: Comment[];
    productLikeList: Product[];
    __v?: number;
}

export interface UserAuth {
    id:string;
    username:string;
    email:string;
    password:string;
}

export interface UserDetails {
    firstName: string;
    lastName: string;
    username:string;
    email:string;
    avatar:string;
    aboutMe: string;
    productOwner?: Product[];
    commentOwner?: Comment[];
    productLikeList?: Product[];
}
