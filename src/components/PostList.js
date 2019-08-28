/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import PostItem from './PostItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core'
import useStyles from '../helpers/styles'


const PostList = () => {
  //usage useSelector don’t need a containers folder
  const { allPosts, error, isLoading } = useSelector(store => store.posts);
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    dispatch({type: 'IS_LOADING'})
    dispatch(getAllPosts());
  }, [dispatch]);

  //when posts are not loaded yet
  if (isLoading) {
    return (
      <div className={classes.progress}>
        <LinearProgress />
      </div>
    )
  }

  if (error) {
    return (
      <>
        <Typography variant='h5' className={classes.header}>{error}</Typography>
      </>
    )
  }

  if (allPosts) {
    return (
      <>
        <Typography variant='h4' className={classes.header} >
          Post list
        </Typography>
        {allPosts.map(post =>
          <PostItem key={post.id} post={post} />
        )}
      </>
    )
  }

  return null
}

export default PostList