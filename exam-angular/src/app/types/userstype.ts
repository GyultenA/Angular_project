export interface Theme {

    post: string [];


}

export interface User {

}

export interface Post {
    likes: string[];
    userId: User;
    text: string [];
    created_at: string;
}