import React from 'react'
import { Select, Input, DatePickerField } from './fileImports'

const FormikControl = (props) => {
  const nodeRef= React.useRef(null)
  const {control, value} = props
  switch (control) {
    case 'input':
      return <Input {...props}/>
    case 'select':
      return <Select {...props} />
    case 'date':
      return <DatePickerField {...props}  nodeRef={nodeRef}/>
    default: return null
  }
}

export default FormikControl