import React from 'react'
import PostsList from './../../postsList/PostsList';
import Add from '../../Add/Add';

export default function Posts() {
    return (
        <div>
            <section className='py-12'>
                <div className='max-w-3xl mx-auto'>
                    <Add />
                    <PostsList />
                </div>
            </section>
        </div>
    )
}
