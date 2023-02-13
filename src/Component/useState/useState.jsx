// import React from 'react';
// import PropTypes from 'prop-types';
// import { Haha } from 'react'

// Haha.propTypes = {

// };
// const oder = [123, 432, 523]
// function Haha(props) {
//     const [counter, setCounter] = useState(() => {
//         const total = oder.reduce((acc, curr) => acc + curr)
//         return total
//     })
//     const handleClick = () => {
//         setCounter(prev => prev + 1)
//     }
//     return (
//         <div>
//             <h3>{counter}</h3>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     );
// }

// export default Haha;
// import React from 'react';
// import PropTypes from 'prop-types';
// import { useState } from 'react';

// const gifts = [
//     'Iphone 14',
//     'Macbook M2 2022',
//     'Apple Watch',
//     'Airpord Pro',
//     'BCS durex'
// ]

// function GetGift() {
//     const [gift, setGift] = useState();
//     const getGift = () => {
//         const index = Math.floor(Math.random() * gifts.length);
//         setGift(gifts[index])
//     }
//     return (
//         <div>
//             <h2 style={{ color: 'red' }}>{gift || 'Click to get gift for you'} </h2>
//                 <button onClick={getGift}>Click to get Gift</button>
//         </div>
//     )
// }

// export default GetGift;
import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react'

Haha.propTypes = {
    
};

function Haha(props) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
        
    }
    const handleSubmit = () => {
    console.log({name,email});
    }

    return (
        <div>
           <input value={name} onChange = {handleChange} />
           <input value={email} onChange = {(e)=>setEmail(e.target.value)} />
           <button onClick = {handleSubmit}>Register</button>
        </div>
    );
}

export default Haha;