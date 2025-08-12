import { Avatar } from 'flowbite-react'
import React from 'react'

export default function CommentPostHeader({ 
    user :{ createdAt, body, name, photo }}) {
  return (
    <div>
                      {/* header :: user data */}
                      <header className='flex items-center'>
                          <Avatar className='me-4' alt={name} img={photo} rounded />
                          <div>
                              <h2>{name}</h2>
                              <span>{createdAt}</span>
                          </div>
                      </header>
      
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {body}
                      </h3>
    </div>
  )
}
