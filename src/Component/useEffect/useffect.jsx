import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

Test.propTypes = {

};
const tabs = ["posts", "comments", "albums"]
function Mounted() {
    const [mounted, setMounted] = useState(false)
    return (
        <div>
            <button onClick={(e) => setMounted(e.target.value)}>Click me</button>
            {mounted && <Test />}
        </div>
    )
}
function Test(props) {
    const [type, setType] = useState('posts')
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('')
    const [scroll, setScroll] = useState(false)
    const [counter, setCounter] = useState(18)
    const [avatar,setAvatar] = useState()
    useEffect(() => {
        const timeer = setInterval(() => {
            setCounter(pre => {
                return pre > 0 ? pre - 1 : pre
            })
        }, 1000)
        return ()=>clearInterval(timeer)
    }, [])
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [type])
    useEffect(() => {
        document.title = title;
    });
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY >= 200)
        }
        // addEventListener
        window.addEventListener('scroll', handleScroll)
        // removeEventListener invoid leak memory
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    const handleAvatar =(e) =>{
        const files = e.target.files[0]
        // create URL tam thoi
        files.preview =URL.createObjectURL(files)
        setAvatar(files)
    }
    return (
        <div>
            <input type="file" name="haha" id="haha" 
            onChange ={handleAvatar}
            />
             {avatar&&<img src={avatar.preview} />}
            <h1>{counter}</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >{tab}</button>
            ))}
            {data.map((item, index) => (
                <p key={index}>{item.title ?? item.body}</p>
            ))}
            {scroll && (
                <button
                    style={{
                        position: 'fixed',
                        top: '600px', left: '30px'
                    }}
                >goto top</button>
            )}
        </div>
    );
}

export default Test;