import React from 'react'
import FormikControl from './FormikControl'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
<<<<<<< HEAD
import {useUserContext} from './store/usercontext'
import {Link} from 'react-router-dom'
const FormikContainer = () => {
  const {addFormData, singleUser, updateUser, setSingleUserId } = useUserContext();
=======
import {useUserContext} from './store/user-context'
import {Link} from 'react-router-dom'
const FormikContainer = () => {
  const {addFormData, singleUser, updateUser, singleUserId } = useUserContext();
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
  const dropdownOptions = [
    {id:1, label:'Gender', value:''},
    {id:2, label:'Male', value:'Male'},
    {id:3, label:'Female', value:'Female'}
  ]
 const initialValues = {name:'', email:'', profession:'', age:'', gender:''} 
  return (
    <Formik
      initialValues= {singleUser}
      enableReinitialize= {true}
      validationSchema={Yup.object({
<<<<<<< HEAD
        name:Yup.string()
        .required('Full Name is required')
        .matches(/^[A-Z][A-z]*[.\s][A-z]+$/,{ message: <em>Full Name is not Valid</em> }),
        email:Yup.string().email('It must be a valid Email').required('Email is required'),
        profession:Yup.string()
        .required('Profession is required')
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        age:Yup.number().positive().integer().required('Age is required'),
=======
        name:Yup.string().required('Full Name is required'),
        email:Yup.string().required('Email is required'),
        profession:Yup.string().required('Profession is required'),
        age:Yup.number().required('Age is required'),
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
        doB:Yup.date().required('Date of Birth is required'),
        gender:Yup.string().required('Please select gender'),
      })}
      onSubmit={(values, {resetForm})=>{
        alert(JSON.stringify(values, null, 2))
        // createNewUser(values)
        console.log(values)
        if(values){
          updateUser(values)
          resetForm({values:''})
          console.log(values)
        }  
      }}
      >
        {formik => {
          console.log(formik)
         return(
          <Form className='flex flex-col text-center items-center justify-center
            mx-auto bg-slate-200 rounded shadow-lg p-3'>
<<<<<<< HEAD
=======
                
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
            <h3 className='text-3xl text-zinc-600 font-bold'>Registration Form</h3>
            <FormikControl control='input' type='text' label='Name' name='name' placeholder='Full Name'/>
            <FormikControl control='input' type='email' label='Email' name='email' placeholder='Email'/>
            <FormikControl control='input' type='text' label='Profession' name='profession' placeholder='Profession'/>
<<<<<<< HEAD
            <FormikControl control='input' type='number' label='Age' name='age'placeholder='Age' step={1} min={20}/>
            <FormikControl control='select' label='Gender' name='gender' options={dropdownOptions}/>
            <FormikControl control='date'  label='Date of Birth' name='doB'/>
            <button type='submit' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold'>
              SUBMIT</button>
=======
            <FormikControl control='input' type='number' label='Age' name='age' placeholder='Age'/>
            <FormikControl control='select' label='Gender' name='gender' options={dropdownOptions} placeholder='Gender'/>
            <FormikControl control='date'  label='Date of Birth' name='doB' />
            {singleUser && 
            <button type='submit' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold' 
           >UPDATE</button>}
            {singleUser && <button type='button' 
            className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold'
            onClick={()=>{}}>CANCEL</button>}
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
            <button type='button' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold' 
            ><Link to='/'>Click here to see the List of Users</Link></button>
          </Form>
         )
          
        }}
    </Formik>
  )
}

export default FormikContainer