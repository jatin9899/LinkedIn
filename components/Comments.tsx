
import React from 'react'
import Comment from './Comment' 
import { IPostDocument } from '@/models/post.model'
const Comments = ({post}:{post:IPostDocument}) => {
  return (
    <div> 
        {
            post?.comments?.map((comment: any)=>{
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })
        } 
    </div>
  )
}

export default Comments