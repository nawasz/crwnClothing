import React from 'react'
import './form-input.styles.scss'
const FormFields = ({label, ...otherProperties}) => {
        const pr =   {...otherProperties}
         console.log(pr)
  return (
    <div className="group">
       {label && (
        <div>
            <input className= "form-input" {...otherProperties} />
            <label className={`${otherProperties.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            
        </div>
          )
       }
  </div>
      
  )
}

export default FormFields;
