import React from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog'

const BlogsList = ({blogs,title}) => {
  return (
   <React.Fragment>
    <div className="blogs">
        <div className="blogs_title">
            <h1>{title}</h1>
        </div>
        {blogs && blogs.map((blog) => (
            <div className="blogs_list" key={blog.id}>
              <Blog blog={blog}/>
            </div>
        ))}
    </div>
   </React.Fragment>
  )
}
BlogsList.propTypes = {
    blogs: PropTypes.array.isRequired
}
BlogsList.propTypes = {
    title: PropTypes.string.isRequired
};
export default BlogsList