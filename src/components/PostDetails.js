/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getPostWithComments } from '../actions/posts'
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from '../helpers/styles'
import { Typography } from '@material-ui/core'
import CommentList from './CommentList'


const PostDetails = (props) => {
  const classes = useStyles()
  const id = props.match.params.id
  const dispatch = useDispatch()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    dispatch(getPostWithComments(id)).then(res => {
      if (res.error) setError(res.error.data)
      else setPost(res.payload.data)
      setIsLoading(false)
    })
  }, [dispatch, id])

  if (isLoading) {
    return (
      <div className={classes.progress}>
        <LinearProgress />
      </div>
    )
  }

  if (error) {
    return (
      <Typography variant='h5' className={classes.header}>{error}</Typography>
    )
  }
  if (post) {
    return (
      <>
        <Typography variant='h4' className={classes.header}>{post.title}</Typography>
        <Typography variant='h6'>Creator: {post.creator}</Typography>
        <Typography className={classes.date}>{post.date}</Typography>
        <Typography variant='body1'>{post.body}</Typography>
        <hr />
        <CommentList comments={post.comments} />
      </>
    )
  }
  
  return null
}

export default PostDetails