//this method needs cause response is not optimized
export const filterResponse = (res) => {
  return res.reduce( (result, item) => {
    if (item instanceof Array) item.forEach(post => result.push(post))
    else result.push(item)
    return result
  }, []).filter(post => post.id)
}