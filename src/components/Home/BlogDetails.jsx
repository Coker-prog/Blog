import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useParams, useNavigate } from 'react-router-dom'
import { delete_blog, get_blog } from '../../features/blogSlice'

const BlogDetails = () => {
    const { id } = useParams()
    console.log(id)
    // const [blogs, setBlogs] = useState('')
    const {blog} = useSelector((state) => state.blogSlice)
    console.log(blog)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetch('http://localhost:3000/Blogs/' + id)
        .then((res) => {
           return res.json()
        })
        .then((data) => {
            console.log(data)
          dispatch(get_blog(data));
        })
    },[dispatch, id])

    const handleDelete = () => {
        fetch('http://localhost:3000/Blogs/' + id,{
            method: 'DELETE',
        }).then(()=> {
            dispatch(delete_blog(id))
            navigate('/')
        })
    }
  return (
    <div>
       <h1>hello - {id}</h1>
       <h3>{blog.title}</h3>
       <p>{blog.body}</p>
       <p><strong>Written By:</strong>{blog.author}</p>
       <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default BlogDetails