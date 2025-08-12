import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
  
    
    const [post, setPost] = useState(null)
    const{id}=useParams()
    async function getPost() {
        try {
            const { data: { post } } = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${id}`, 
                { headers: { token: localStorage.getItem('token') } })
            console.log(post);
            setPost(post)
            console.log(localStorage.getItem('token'));
            
            console.log(post);
            
        } catch (error) {
            console.log(error);
            console.log(localStorage.getItem('token'));
        }
    }


    useEffect(() => {
        getPost()
    }, [])

    return (
    <div>
      <h2 className='text-2xl'>Post Details</h2>
    </div>
  )
}
