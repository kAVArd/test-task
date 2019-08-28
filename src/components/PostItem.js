/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Divider } from '@material-ui/core'
import useStyles from '../helpers/styles'

const PostItem = ({ post }) => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='h5'>{post.title}</Typography>
      <Typography className={classes.date}>{post.date}</Typography>
      <Typography variant='body1'>{post.body.substr(0, 100) + '...'}<Link to={`/posts/${post.id}`}>Read more</Link></Typography>
      <Divider className={classes.postDivider}/>
    </div>
  )
}

export default PostItem
