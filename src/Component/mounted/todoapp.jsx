import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

Todoapp.propTypes = {

};

// function Todoapp(props) {
//     const [job, setJob] = useState('');
//     const [jobs, setJobs] = useState(() => {
//         const jobsLocal = JSON.parse(localStorage.getItem('jobs'))
//         return jobsLocal ?? []
//     })
//     const handleClick = () => {
//         setJobs(prev => {
//             const saveJob = [...prev, job]
//             localStorage.setItem('job', JSON.stringify(saveJob));
//             return saveJob
//         })

//     }
//     const handleDelete = (index) => {
//         setJobs(() => {
//             const newJob = jobs.filter((job, indexJob) => indexJob !== index)
//             localStorage.setItem('job', JSON.stringify(newJob));
//             return newJob
//         })
//     }
//     return (
//         <div>
//             <input
//                 value={job}
//                 onChange={e => setJob(e.target.value)}
//             />
//             <button onClick={handleClick}>Click</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job} <button onClick={() => handleDelete(index)}>delete</button></li>
//                 ))}

//             </ul>
//         </div>
//     );
// }
function Todoapp (){
    const [job,setJob] = useState('')
    const [jobs,setJobs] = useState(()=>{
    const saveJob = JSON.parse(localStorage.getItem('jobs'))
    return saveJob??[]
    })
    const handleClick = () =>{
        setJobs(prev=>{
            const newJob = [...prev,job]
            localStorage.setItem("jobs",JSON.stringify(newJob))
            return newJob
        })
    }
    const handleDelete = (index) => {
        setJobs(()=>{
            const delJob = jobs.filter((job,indexJob)=>indexJob!==index)
            localStorage.setItem("jobs",JSON.stringify(delJob))
            return delJob
        })
    }
    return (
        <div>
            <input value={job} onChange = {e=>setJob(e.target.value)} />
            <button onClick = {handleClick}>Click</button>
            <ul>
                {jobs.map((job,index)=>(
                    <li key={index}>{job}<button onClick={()=>handleDelete(index)}>delete</button></li>
                ))}
            </ul>
        </div>
    )
}
export default Todoapp;