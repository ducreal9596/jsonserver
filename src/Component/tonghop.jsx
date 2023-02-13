import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

Tonghop.propTypes = {

};
function Tongle(props) {
    const [mounted, setMounted] = useState(false)
    const handleClick = () => {
        setMounted(!mounted)
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {mounted && <Tonghop />}
        </div>
    )
}
const tabs = ["posts", "comments", "albums"]
function Tonghop(props) {
    const [type, setType] = useState("posts")
    const [data, setData] = useState([])
    const [title,setTitle] = useState('')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setData(post)
            }
            )
    }, [type])
    useEffect(()=>{
        document.title=title
    })
    return (
        <div>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} />
            {tabs.map((tab, index) => (
                <button key={index}
                    value={tab}
                    onClick={()=>setType(tab)}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                >{tab}</button>
            ))}
            {data.map((infor, index) => (
                <p key={index}>{infor.title||infor.body}</p>
            ))}
        </div>
    );
}

export default Tongle;