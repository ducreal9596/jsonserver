import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

Checkbox.propTypes = {

};
const courses = [
    {
        name: "javascript",
        id: 1
    },
    {
        name: "React JS",
        id: 2
    },
    {
        name: "PHP",
        id: 3
    },
    {
        name: "NOdeJS",
        id: 4
    },
    {
        name: "Ruby",
        id: 5
    },
    {
        name: "Java",
        id: 6
    },
    {
        name: "CPP",
        id: 7
    },
]
// function Checkbox(props) {
//     const [checked,setChecked] = useState()
//     const handleClick = () => {
//         console.log(checked);
//     }
//     return (
//         <div>
//             {courses.map((course) => {
//                 return <div key={course.id}>

//                     <input id={course.name} type="radio" 
//                     checked={checked===course.id}
//                     onChange={()=>setChecked(course.id)}
//                     />
//                     <label htmlFor={course.name}>{course.name}</label>
//                 </div>
//             })}
//             <button onClick={handleClick}>click me</button>
//         </div>
//     );
// }
function Checkbox(props) {
    const [checked, setChecked] = useState([])
    const handleChecked = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const handleClick = () => {
        localStorage.setItem('course', JSON.stringify(checked))
    }
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input type="checkbox" id={course.name}
                        checked={checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    <label htmlFor={course.name}>{course.name}</label>
                </div>
            ))}
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Checkbox;