import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className="field" >
      <label htmlFor={field.name}>{label}</label>
      <input
        className= {`form-control shadow-sm ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete='off'
      />
      <ErrorMessage component="div" name={field.name} className = "error-message"/>
    </div>
  )
}

export default TextField;
