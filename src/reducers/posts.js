import { filterResponse } from '../helpers/posts'

const initState = {
  allPosts: null,
  isLoading: false,
  error: null
}

export const posts = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_SUCCESS': {
      return {
        ...state,
        allPosts: filterResponse(action.payload.data),
        isLoading: !state.isLoading
      }
    }
    case 'GET_ALL_POSTS_FAIL': {
      return {
        ...state,
        isLoading: !state.isLoading,
        error: action.error.data
      }
    }
    case 'IS_LOADING': {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    }
    default: 
      return state
  }
}