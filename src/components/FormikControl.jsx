import React from 'react'
import Select from './Select'
import Input from './Input'
import DatePickerField from './DatePicker'
const FormikControl = (props) => {
  const {control, value} = props
  switch (control) {
    case 'input':
      return <Input {...props}/>
    case 'select':
      return <Select {...props} />
    case 'date':
      return <DatePickerField {...props} />
    default: return null
  }
}

export default FormikControl