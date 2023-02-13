import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TestCheckbox.propTypes = {
    
};
const apples = ["macbook pro", "Iphone 14", "Ipad pro", "macbook pro", "Iphone 14", "Ipad pro" ]
function TestCheckbox(props) {
    const [checked,setChecked] = useState([])
    const handleChange =(id) =>{
        setChecked(prev=>{
            const isChecked = checked.includes(id)
            if(isChecked){
                return checked.filter(item=>item!==id)
            } else {
                return [...prev,id]
            }
        })
    }
    const handleClick =() =>{
        console.log(checked);
    }
    return (
        <div>
            {apples.map((item,index)=>(
                <div key={index}>
                    <input type="checkbox" id={index} 
                    value={checked.includes(index)}
                    onChange={()=>handleChange(index)}
                    />
                <label htmlFor={index}>{item}</label>
                </div>
            ))}
               <button onClick={handleClick}>Click</button> 
        </div>
    );
}

export default TestCheckbox;