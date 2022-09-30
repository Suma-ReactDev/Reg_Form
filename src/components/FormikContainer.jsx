import React from 'react'
import FormikControl from './FormikControl'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import {useUserContext} from './store/user-context'
import {Link} from 'react-router-dom'
const FormikContainer = () => {
  const {addFormData } = useUserContext();
  const dropdownOptions = [
    {id:1, label:'Gender', value:''},
    {id:2, label:'Male', value:'Male'},
    {id:3, label:'Female', value:'Female'}
  ]
  return (
    <Formik
      initialValues={{name:'', email:'', profession:'', age:'', gender:''}}
      validationSchema={Yup.object({
        name:Yup.string().required('Full Name is required'),
        email:Yup.string().required('Email is required'),
        profession:Yup.string().required('Profession is required'),
        age:Yup.number().required('Age is required'),
        doB:Yup.date().required('Date of Birth is required'),
        gender:Yup.string().required('Please select gender'),
      })}
      onSubmit={(values, {resetForm})=>{
        alert(JSON.stringify(values, null, 2))
        // createNewUser(values)
        if(values){
          addFormData(values)
          resetForm({values:''})
          console.log(values)
        }
      }}>
        {formik => (
          <Form className='flex flex-col text-center items-center justify-center
            mx-auto bg-slate-200 rounded shadow-lg p-3'>
            <h3 className='text-3xl text-zinc-600 font-bold'>Registration Form</h3>
            <FormikControl control='input' type='text' label='Name' name='name'/>
            <FormikControl control='input' type='email' label='Email' name='email'/>
            <FormikControl control='input' type='text' label='Profession' name='profession'/>
            <FormikControl control='input' type='number' label='Age' name='age'/>
            <FormikControl control='select' label='Gender' name='gender' options={dropdownOptions}/>
            <FormikControl control='date'  label='Date of Birth' name='doB'/>
            <button type='submit' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold'>SUBMIT</button>
            <button type='button' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold' 
            ><Link to='/'>Click here to see the List of Users</Link></button>
          </Form>
        )}
    </Formik>
  )
}

export default FormikContainer