/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, TextField, Button } from '@material-ui/core'
import useStyles from '../helpers/styles'
import CommentItem from './CommentItem'
import { createComment } from '../actions/comments'

const CommentList = ({ comments, postId }) => {
  const classes = useStyles()
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createComment({ postId, body: newComment }))
    setNewComment('')
  }

  return(
    <div>
      <Typography variant='h5' className={classes.header}>Comments</Typography>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <form onSubmit={e => handleSubmit(e)}>
        <TextField 
          value={newComment} 
          onChange={e => setNewComment(e.target.value)} 
          label='Comment'  
          className={classes.commentField}
          margin='normal'
        />
        <Button type='submit' color='primary' variant='contained' className={classes.button}>Add comment</Button>
      </form>
    </div>
  )
}

export default CommentList