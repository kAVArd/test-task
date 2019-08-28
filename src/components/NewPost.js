/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Typography, TextField, Grid, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyles from '../helpers/styles'
import { createPost } from '../actions/posts'
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

const defaultDate = '2019-08-27'

//there is a snackbar that appears after pressing the submit button (error or success)
const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

const NewPost = () => {
  const classes1 = useStyles();
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [creator, setCreator] = useState('')
  const [date, setDate] = useState(defaultDate)
  const [body, setBody] = useState('')
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(null)

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({ title, creator, date, body })).then(res => {
      if (res.payload) {
        setSnackbar({ variant: 'success', message: 'Post is successufully create!'})
        setOpen(true)
      }
      if (res.error) {
        setSnackbar({ variant: 'error', message: res.error.data })
        setOpen(true)
      }
    })
    setTitle('')
    setCreator('')
    setBody('')
    setDate(defaultDate)
  }

  return (
    <>
      <Typography variant='h4' className={classes1.header}>Create post</Typography>
      <form onSubmit={e => handleSubmit(e)}>
        <Grid container>
          <Grid item sm={4} xs={4} md={4}>
            <TextField label='Title' type='text' margin='normal' value={title} onChange={e => setTitle(e.target.value)}/>
          </Grid>
          <Grid item sm={4} xs={4} md={4}>
            <TextField label='Creator' type='text' margin='normal'value={creator} onChange={e => setCreator(e.target.value)}/>
          </Grid>
          <Grid item sm={4} xs={4} md={4}>
            <TextField type='date' label='Date' value={date} margin='normal' onChange={e => setDate(e.target.value)}/>
          </Grid>
        </Grid>
        <TextField 
          label='Body' 
          type='text' 
          margin='normal' 
          variant='outlined' 
          placeholder='Write your post here'
          style={{width: '70%'}}
          multiline
          value={body}
          onChange={e => setBody(e.target.value)}
          rows={4}
        />
        <Button  type='submit' variant="contained" color='primary' className={classes1.button}>Create post</Button>
      </form>
      {snackbar &&
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant={snackbar.variant}
          message={snackbar.message}
        />
        </Snackbar>
      }
    </>
  )
}

export default NewPost