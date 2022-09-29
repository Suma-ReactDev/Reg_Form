import { ErrorMessage, Field } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, useFormikContext, useField } from 'formik';
const DatePickerField = (props) => {
  const {label, name, ...rest} = props
  return (
    <div className='ml-10 mr-10'>
      <label htmlFor={name} className='block text-gray-500 font-bold mb-1'>{name}</label>
      <Field name={name}
      className="border-2 border-gray-200 rounded w-full py-2 
      px-4 text-gray-700 leading-tight focus:outline-none 
      focus:bg-white focus:border-purple-500">
        {({ field, meta, form: { setFieldValue } }) => {
          console.log(field)
        return (
          <DatePicker
            {...field}
            selected={field.value || null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
          />
        );
      }}
      </Field>
      <div className='text-lg text-red-600 font-medium'><ErrorMessage name={name} /></div>
    </div>
  )
}

export default DatePickerField