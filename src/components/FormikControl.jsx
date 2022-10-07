import React from 'react'
import { Select, Input, DatePickerField } from './fileImports'

const FormikControl = (props) => {
  const {control} = props
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