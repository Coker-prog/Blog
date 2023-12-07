import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  return (
    <React.Fragment>
      <Link className='links' to={`/blogged/${blog.id}`}>
        <h3>{blog.title}</h3>
        <p><strong>Written By:</strong>{blog.author}</p>
      </Link>
    </React.Fragment>
  )
}

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog