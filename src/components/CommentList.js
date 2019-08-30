/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, TextField, Button } from '@material-ui/core'
import useStyles from '../helpers/styles'
import CommentItem from './CommentItem'
import { createComment } from '../actions/comments'
import update from 'immutability-helper';

const CommentList = ({ comments }) => {
  const classes = useStyles()
  const [commentsState, setCommentsState] = useState(comments)
  const { postId } = comments[0]
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const commentBody = document.getElementById('commentBody')
    dispatch(createComment({ postId, body: commentBody.value }))
      .then(res => setCommentsState(update(commentsState, {$push: [res.payload.data]})))
    commentBody.value = ''
  }

  return(
    <div>
      <Typography variant='h5' className={classes.header}>Comments</Typography>
      {commentsState && commentsState.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <form onSubmit={e => handleSubmit(e)}>
        <TextField
          id='commentBody'
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