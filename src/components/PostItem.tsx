import React from 'react'
import { IPost } from '../models/IPost';

interface PostItemProps {
    post: IPost
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <div>
            {post.id}. {post.title}
            <button>delete</button>
        </div>
    )
}


export default PostItem;