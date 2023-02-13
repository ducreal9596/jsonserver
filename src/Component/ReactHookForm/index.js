import React from 'react';
import './HookForm.css'
import { useForm } from 'react-hook-form';

ReactHookForm.propTypes = {
    
};

function ReactHookForm(props) {
    const {register, handleSubmit, errors} = useForm()
    // const haha = JSON.parse(localStorage.getItem('formState'))??[]
    // console.log(haha);
    const onSubmit = (data) =>{
        console.log(data);
        // const hehe = haha.push(lala)
        // localStorage.setItem('formState', JSON.stringify(hehe));
    }
    return (
        <div className='form' style={{display:'flex'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' name='name' placeholder='name' ref= {register({required: "Name is required", minLength: {value: 5, message:'Name must be at least 5 characters'},maxLength: {value: 20, message:"Name cannot exceed 80 characters" }})}/>
            {errors.name && <span>{errors.name.message}</span>}
            {/* <input type='password' name='password' placeholder='password' ref={register({required: true})}/>
            <input type='text' name='email' placeholder='duongduc@gmail.com' ref={register({required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}/> */}
            <button type='submit'>Submit</button>
            {/* {Object.keys(errors).length!==0&&(
                <ul style={{color:'red'}} >
                    {errors.name?.type==='required' && <li>Name is required</li>}
                    {errors.name?.type==='minLength'&& (<li>Name must be at least 5 characters</li>)}
                    {errors.name?.type==='maxLength'&& (<li>Name cannot exceed 80 characters</li>)}
                    {errors.password?.type==='required'&& <li>Password is required</li>}
                    {errors.email?.type==='required'&& <li>Email is required</li>}
                    {errors.email?.type==='pattern'&& <li>Email is invalid</li>}
                </ul>
            )} */}
            </form>
        </div>
    );
}

export default ReactHookForm;