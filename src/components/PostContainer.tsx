import React from 'react'
import { postAPI } from '../services/PostsService'
import PostItem from './PostItem'

export const PostContainer = () => {
    const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10)
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>ERROR</h1>}
            {posts?.map(post => <PostItem key={post.id} post={post} />)}
        </div>
    )
}
