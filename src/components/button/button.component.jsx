import './button.styles.scss'
const Button = ({children,buttonType,...otherProps}) =>{
   const merged =   {...otherProps}
   console.log("merged",merged)
   console.log(children,"chidren")
  console.log(buttonType,"buttonType")

    const BUTTON_TYPE_CLASSES ={
        google: 'google-sign-in',
        inverted:'inverted',
    
    }
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
          {children}
        </button>
    )
};

export default Button;