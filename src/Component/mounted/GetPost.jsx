import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import PaginatedItems from './pagi';

GetPost.propTypes = {

};

function GetPost(props) {
    const [post, setPost] = useState([])
    useEffect(() => {
        let haha = JSON.parse(localStorage.getItem('tasks'))
        setPost(haha)
    }, [])
    console.log(post[1]);
    return (
        <div>
            <PaginatedItems data={post} />
        </div>
    );
}

export default GetPost;