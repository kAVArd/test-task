import { makeStyles } from '@material-ui/core/styles';

//CSS-in-JS for cutomizing Material for me
const useStyles = makeStyles(() => ({
  header: {
    marginTop: 20,
    marginBottom: 20
  },
  postDivider: {
    marginTop: 10,
    marginBottom: 10
  },
  date: {
    color: 'gray',
    marginTop: 10,
    marginBottom: 10
  },
  progress: {
    marginTop: 20
  },
  commentDivider: {
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    display: 'block',
    marginTop: 20
  },
  commentField: {
    width: 300
  }
}));

export default useStyles