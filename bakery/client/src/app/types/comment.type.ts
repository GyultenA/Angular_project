import { Product } from "./product.type";
import { User } from "./user.type";


export interface Comment {
_id?:string;
title:string;
description:string;
helpfulYes?: number;
helpfulNo?: number;
usersVotedHelpf?: string[];
owner: User;
createdAt?: Date;
product:Product;
__v?:number

}