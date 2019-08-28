import { combineReducers } from 'redux'
import { posts } from './posts'

//decide to leave it for demostration
const reducers = combineReducers({
  posts: posts
})

export default reducers