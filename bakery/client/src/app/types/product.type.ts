import { User } from "./user.type";
import { Comment } from "./comment.type";

export interface Product {
    _id?: string;
    name: string;
    description: string;
    type: string;
    imageUrl: string;
    usersWhoRated?: User[];
    createdDate?: Date;
    owner: User;
    isLiked?: boolean;
    likedBy?: {
        user?: User;
        likeOn?: Date;
    }[];
    comments?: Comment[];
    __v?: number;
}