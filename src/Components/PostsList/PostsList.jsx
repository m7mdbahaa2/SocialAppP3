import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
import axios from 'axios';

export default function postsList() {
    const [posts, setPosts] = useState(null)
    async function getPosts() {
        try {
            const { data: { posts } } = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`, { headers: { token: localStorage.getItem('token') } })
            console.log(posts);
            setPosts(posts)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div>
            <section className='py-12'>
                <div className='max-w-3xl mx-auto'>
                    <div className='flex flex-col gap-4'>
                        {posts && posts.map((post) => <PostItem key={post._id} post={post}/>)}
                    </div>
                </div>
            </section>
        </div>
    )
}
