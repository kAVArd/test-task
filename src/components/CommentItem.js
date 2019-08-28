/* eslint-disable no-unused-vars */
import React from 'react'
import { Divider, Typography, Box } from '@material-ui/core'
import useStyles from '../helpers/styles'

const CommentItem = ({ comment }) => {
  const classes = useStyles()

  return(
    <div>
      <Typography variant='body2'>{comment.body}</Typography>
      <Divider className={classes.commentDivider}/>
    </div>
  )
}

export default CommentItem