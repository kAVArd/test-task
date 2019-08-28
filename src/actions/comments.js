export const createComment = (comment) => {
  return {
    type: 'CREATE_COMMENT',
    payload: {
      request: {
        method: 'POST',
        url: '/comments',
        data: comment
      }
    }
  }
}