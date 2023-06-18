import React from 'react'
import { postAPI } from '../services/PostsService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'

export const PostContainer = () => {
    const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100)
    const [createPost, { }] = postAPI.useCreatePostMutation()
    const [updatePost, { }] = postAPI.useUpdatePostMutation()
    const [deletePost, { }] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new Post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>ERROR</h1>}
            {posts?.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
        </div>
    )
}
