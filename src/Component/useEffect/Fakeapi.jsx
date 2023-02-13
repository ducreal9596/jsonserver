import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const fake = 'http://fakestoreapi.com/products'
const Fakeapi = () => {
    const [title,setTitle] =useState([])
    useEffect(()=>{
        async function getApi () {
            const res = await axios.get(fake)
            console.log(res.data);
         }
         getApi()
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Fakeapi;