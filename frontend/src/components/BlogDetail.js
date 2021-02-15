import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});
    useEffect(()=>{
        const slug = props.match.params.id;

        const fetchData = async () =>{
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data)
            }
            catch(err){

            }
        };
        fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };

    const capitalize = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };
       return(
           <div className='container mt-3'>
           <div class="card">
  <h5 class="card-header">{blog.title}</h5>
  <div class="card-body">
  <h2 className='text-muted mt-3' style={{ color: 'black' }}>Category: {capitalize(blog.category)}</h2>
  <h4 style={{ color: 'black' }}>{blog.month} {blog.day}</h4>
  <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} style={{ color: 'black' }} />
    <Link to='/blog' class="btn btn-dark">Go Back</Link>
  </div>
</div>
           </div> 
       );
};

export default BlogDetail;