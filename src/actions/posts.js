export const getAllPosts = () => {
  return {
    type: 'GET_ALL_POSTS',
    payload: {
      request: {
        method: 'GET',
        url: '/posts'
      }
    }
  }
}

export const getPostWithComments = (id) => {
  return {
    type: 'GET_POST_WITH_COMMENTS',
    payload: {
      request: {
        method: 'GET',
        url: `/posts/${id}?_embed=comments`
      }
    }
  }
}

export const createPost = (post) => {
  return {
    type: 'CREATE_POST',
    payload: {
      request: {
        method: 'POST',
        url: `/posts`,
        data: post
      }
    }
  }
}