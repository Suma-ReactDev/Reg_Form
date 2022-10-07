import React from 'react'
import { Select, Input, DatePickerField } from './fileImports'

const FormikControl = (props) => {
<<<<<<< HEAD
  const {control} = props
=======
  const nodeRef= React.useRef(null)
  const {control, value} = props
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
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