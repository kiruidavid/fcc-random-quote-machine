import React from 'react' 

const Button = (props) => {
    return(
        <div>
            <button id="new-quote" onClick={props.clickHandler}>{props.displayButtonName}</button>
        </div>
    )
} 
export default Button;