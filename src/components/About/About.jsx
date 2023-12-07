import { useState } from "react";
import { create } from '../../features/blogSlice'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const About = () => {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate('');
    const dispatch = useDispatch()
    const handleSubmit= (e) => {
        e.preventDefault();
        const blog = {title,body,author}
        fetch('http://localhost:3000/Blogs',{
            method: 'POST',
            body: JSON.stringify(blog),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        })
        .then((data) => {
            dispatch(create(data))
            navigate('/')
        })
    }
    const handleChange = (e) => {setAuthor(e.target.value),console.log(e.target.value)}
  return (
    <div>
        <div className="create_about">
            <div className="create_abouts">
                <h1>ADD A NEW BLOG</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>BLOG TITLE:</label>
                    <input type="text" placeholder="text.." value={title} onChange={(e) => {setTitle(e.target.value), console.log(e.target.value)}} />
                </div>
                <div>
                    <label>BLOG BODY:</label>
                    <textarea value={body} onChange={(e) => {setBody(e.target.value), console.log(e.target.value)}}></textarea>
                </div>
                <div>
                    <label>BLOG AUTHOR:</label>
                    <select value={author} onChange={handleChange}>
                        <option value="Messi">Messi</option>
                        <option value="Banjo">Banjo</option>
                        <option value="Ronaldo">Ronaldo</option>
                        <option value="Kenny">Kenny</option>
                        <option value="Gbolly">Gbolly</option>
                    </select>
                </div>
                <div className="bts">
                    <button>ADD BLOG</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default About