import { Avatar, Card } from "flowbite-react";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentPostHeader from "../Pages/Posts/CommentPostHeader";

export default function PostItem({ post, showAllComments = false }) {
  const {
    body,
    image,
    user: { name, photo },
    comments,
    createdAt,
    _id,
  } = post;
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

        <CommentPostHeader user={{ name, photo, createdAt, body }} />
        {/* body */}
        <img src={image} alt={body} />

        {/* footer */}

        <div className="flex items-center justify-between">
          <AiFillLike />
          <div className="flex flex-col gap-2">
            <FaComment />
            {comments && comments.length}
            {/* comments */}
          </div>
          <Link to={`/posts/${_id}`}>
            <FaShare />
          </Link>
        </div>
        {comments &&
          comments.length > 0 &&
          (showAllComments ? (
            <>
              {comments.map((comment) => (
                <CommentPostHeader
                  user={{
                    ...comment.commentCreator, // c3mltha .... 3shan 3ayz kol ely feha bdl ma a3mlhom 5twa 5twa
                    createdAt: comment.createdAt,
                    body: comment.content,
                  }}
                  isComment={true} // mktooob f el 7eta de 3shan ykon f 7alt en 3ndy comment msh bara elmokarna w kda m3moloo destructuring f el component CommentPostHeader
                />
              ))}
            </>
          ) : (
            <>
                <CommentPostHeader
                  user={{
                    ...comments[0].commentCreator, // c3mltha .... 3shan 3ayz kol ely feha bdl ma a3mlhom 5twa 5twa
                    createdAt: comments[0].createdAt,
                    body: comments[0].content,
                  }}
                  isComment={true} // mktooob f el 7eta de 3shan ykon f 7alt en 3ndy comment msh bara elmokarna w kda m3moloo destructuring f el component CommentPostHeader
                />
            </>
          ))}
      </Card>
    </>
  );
}
