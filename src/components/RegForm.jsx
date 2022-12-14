import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useUserContext} from './store/usercontext'
const RegForm = () => {
  const {addFormData} = useUserContext();
  return (
    <Formik 
      initialValues={{name:'', email:'', profession:'', age:'',}}
      validationSchema={Yup.object({
        name:Yup.string().required('Full Name is required'),
        email:Yup.string().required(),
        profession:Yup.string().required(),
        age:Yup.number()
          .required()
      })}
      onSubmit={(values, {resetForm})=>{
        alert(JSON.stringify(values, null, 2))
        // createNewUser(values)
        if(values){
          addFormData(values)
          resetForm({values:''})
        }
      }}
      
      
      >
      <Form className='flex flex-col text-center items-center justify-center
      min-h-fit mx-auto bg-slate-200 rounded shadow-lg p-3'>
        <h3 className='text-3xl text-zinc-600 font-bold'>Registration Form</h3>
       
          <label htmlFor='name' className='text-lg text-zinc-500 font-semibold'>Full Name</label>
          <Field name='name' type='text' id='name' className=' w-[30rem] rounded border py-1 px-2'/>
          <div className='text-lg text-red-600 font-medium'><ErrorMessage name='name' /></ div>
       
        
          <label htmlFor='email' className='text-lg text-zinc-500 font-semibold'>Email</label>
          <Field name='email' type='text' className=' w-[30rem] rounded border py-1 px-2'/>
          <div className='text-lg text-red-600 font-medium'><ErrorMessage name='email' /></div>
        
        
          <label htmlFor='profession' className='text-lg text-zinc-500 font-semibold'>Profession</label>
          <Field name='profession' type='text' className=' w-[30rem] rounded border py-1 px-2'/>
          <div className='text-lg text-red-600 font-medium'><ErrorMessage name='profession' /></div>
       
          <label htmlFor='age' className='text-lg text-zinc-500 font-semibold'>Age</label>
          <Field name='age' className=' w-[30rem] rounded border py-1 px-2'/>
          <div className='text-lg text-red-600 font-medium'><ErrorMessage name='age' className='text-lg text-red-600 font-semibold'/></div>
        
        <button type='submit' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold'>SUBMIT</button>

      </Form>
    </Formik>
  )
}

export default RegForm