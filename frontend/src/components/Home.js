import React from 'react';
import {Link} from 'react-router-dom';
const home = () => (
    <div className='container'>
        <div className="jumbotron" mt-5>
            <h1 className="display-4" style={{ color: '#00ff08' }}>Welcome to my Tech Blog</h1>
            <p className="lead" style={{ color: '#dedede' }}>Enjoy my content</p>
            <hr className="my-4"/>
            <p style={{ color: '#dedede' }}>Tech News</p>
            <Link className="btn btn-dark" to='/blog' role="button">Check out the blog</Link>
            </div>
    </div>
);

export default home;