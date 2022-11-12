import React from 'react'
import {Formik, useFormik} from "formik"
import { signUpSchema } from '../schemas';
const initialValues=({
    fname:"",
    email:"",
    password:"",
    copassword:""
})
function Form() {
    const {values,errors , touched,handleBlur , handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
         validationSchema:signUpSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    console.log(errors)
  return (
    <>
    <div className="container shadow ">
        <h1 className='text-center'>Form handling</h1>
        <div className="row">
            <div className="col-md-5">
                <form action="" onSubmit={handleSubmit}>
        <input type="text"
        className='form-control my-5 py-3'
        name='fname'
        placeholder='Firstname'
        value={values.fname}
        onChange={handleChange}
        onBlur={handleBlur}

         />{errors.fname && touched.fname?<p>{errors.fname}</p>:null}
           <input type="email"
        className='form-control my-5 py-3'
        name='email'
        placeholder='Enter your email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}

         />
         {errors.email && touched.email?<p>{errors.email}</p>:null}
           <input type="password"
        className='form-control my-5 py-3'
        name='password'
        placeholder='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}

         />
         {errors.password && touched.password?<p>{errors.password}</p>:null}
           <input type="password"
        className='form-control my-5 py-3'
        name='copassword'
        placeholder='Confirmpassword'
        value={values.copassword}
        onChange={handleChange}
        onBlur={handleBlur}
         />
         {errors.copassword && touched.copassword?<p>{errors.copassword}</p>:null}
         </form>
         <button className='btn btn-primary' type='button'onClick={handleSubmit}>Sumbit</button>
         </div>
         </div>
    </div>
    </>
  )
}

export default Form;