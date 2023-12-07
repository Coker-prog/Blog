import React, { useEffect} from "react";
import BlogsList from "./BlogsList";
import { useDispatch, useSelector } from 'react-redux';
import { get_blogs, isError } from "../../features/blogSlice";

const Home = () => {
  const {blogs, isLoading, error} = useSelector((state) => state.blogSlice);
  console.log(blogs)
  const dispatch = useDispatch();

  useEffect(() => {
      fetch("http://localhost:3000/Blogs")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Couldn't fetch blog data from server ");
          }
          return res.json();
        })
        .then((data) => {
          dispatch(get_blogs(data));
        })
        .catch((err) => {
          dispatch(isError(err.message))
        });
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="blog">
        {isLoading ? <div className="loading">Loading....</div> :
        <BlogsList blogs={blogs} title="All Blog List!" />
        }
        {error ? <div className="loading">{error}</div>
         :
          <></>}
      </div>
    </React.Fragment>
  );
};

export default Home;
