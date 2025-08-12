import { Avatar, Card } from 'flowbite-react'
import React from 'react'
import { AiFillLike  } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import CommentPostHeader from '../Pages/Posts/CommentPostHeader';

export default function PostItem({ post }) {
    const { body, image, user: {  name, photo }, comments, createdAt,_id } = post;
    return (
        <>
            <Card>
                {/* header :: user data
                <header className='flex items-center'>
                    <Avatar className='me-4' alt={name} img={photo} rounded />

                    <div>
                        <h2>{name}</h2>
                        <span>{createdAt}</span>
                    </div>
                </header>

                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {body}
                </h3> */}

<CommentPostHeader user={{name,photo,createdAt,body}}/>
           {/* body */}
                <img src={image} alt={body} />

                {/* footer */}

                <div className='flex items-center justify-between'>
        <AiFillLike/>
<div className='flex items-center gap-2'>
    <FaComment />
    {comments&& comments.length}
    {/* comments */}




</div>
<Link to='/posts/details'>
<FaShare/>
</Link>
                </div>
            </Card>
        </>
    )
}
