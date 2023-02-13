import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
Testtoway.propTypes = {

};
const oder = [
    {
        Name: 'iphone',
        pride: 2000
    },
    {
        Name: 'ipad',
        pride: 1000
    },
    {
        Name: 'macbook',
        pride: 3000
    },
    {
        Name: 'airpord',
        pride: 5000
    },
]
function Testtoway(props) {
    const [checked, setChecked] = useState([])
    const handleChange = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item !== id);
            } else {
                return [...prev, id]
            }
        })
    }
    const handleClick = () => {
        console.log(checked)
    }
    return (
        <div>
            {oder.map((a, index) => (
                <div key={index}>
                    <input type="checkbox" id={a.Name}
                        checked={checked.includes(index)}
                        onChange={() => handleChange(index)}
                    />
                    <label htmlFor={a.Name}>{a.Name}</label>
                </div>

            ))}
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default Testtoway;