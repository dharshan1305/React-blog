import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [currntCategory, setCurrentCatgegory] = useState('');
    useEffect(()=>{
        const category = props.match.params.id;
        setCurrentCatgegory(capitalize(category));
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const fetchData = async () =>{
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, {category}, config);
                setBlogs(res.data)
            }
            catch(err){

            }
        };
        fetchData();
    }, [props.match.params.id]);

    const capitalize = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryBlogs = ()=>{
        let list =[];
        let result = [];

        blogs.map(blogPost =>{
           return list.push(
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="card" style={{ color: 'black' }}>
            <img className="card-img-top" src={blogPost.thumbnails} alt="media"></img>
            <div className="card-body"style={{ color: '#00ff08' }}>  
            <h3 className="mb-0" style={{ color: 'black' }}>{blogPost.title}</h3>
                <strong className="d-inline-block mb-2 text-primary">{capitalize(blogPost.category)}</strong>
                <div className="mb-1 text-muted" style={{ color: 'black' }}>{blogPost.month} {blogPost.day}</div>
                <p className="card-text mb-auto" style={{ color: 'black' }}>{blogPost.excerpt}</p>
                <Link className="btn btn-dark" to={`/blog/${blogPost.slug}`} role="button">Continue to article</Link>
                </div>
                </div>
              </div>
           );
        });
        for (let i = 0; i < list.length; i+=2){
            result.push(
                <div key={i} className="row mb-2">
                <div className="col-md-6">
                    {list[i]}
                </div>
                <div className="col-md-6">
                    {list[i+1] ? list[i+1]: null} 
                </div>
                </div>
            )
        }
        return result;

    };
    return (
    <div className='container mt-3'>
    <h3 className='display-4'>{currntCategory}Category</h3>
    <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <Link className="p-2 link-secondary" to='/category/world'>World</Link>
                <Link className="p-2 link-secondary" to='/category/hardware'>Hardware</Link>
                <Link className="p-2 link-secondary" to='/category/software'>Software</Link>
                <Link className="p-2 link-secondary" to='/category/cybersecurity'>CyberSecurity</Link>
            </nav>
            </div>
            {getCategoryBlogs()};
    </div>
    );
    };

export default Category;