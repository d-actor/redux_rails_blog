import axios from 'axios';

export const addBlog = (blog) => {
  return {type: 'ADD_BLOG', blog }
}

export const toggleBlog = (id) => {
  return {type: 'TOGGLE_BLOG', id }
}

export const deleteBlog = (id) => {
  return {type: 'DELETE_BLOG', id }
}

export const updateBlog = (id) => {
  return {type: 'UPDATE_BLOG', id }
}

export const getBlogs = (cb) => {
  return (dispatch) => {
    axios.get('/api/blogs')
      .then( res => dispatch({ type: 'BLOGS', blogs: res.data }) )
      .then( cb() )
  }
}
