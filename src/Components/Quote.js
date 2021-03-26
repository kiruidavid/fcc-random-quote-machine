import React from 'react' 
import Button from './Button'

const Quote = (props) => {
    return ( 
        <div className="card">
         <p id = "text">{props.selectedQuote ? props.selectedQuote.quote : ''}</p> 
         <h5 id="author" >{props.selectedQuote ? props.selectedQuote.author : ''}</h5>
      <Button displayButtonName="New Quote" clickHandler={props.getNewIndex}/> 
      <a target="_blank" id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=david&text=${props.selectedQuote.quote}`}><i className="fa fa-twitter" aria-hidden="true"></i></a>

 
        </div>

    )
} 
export default Quote
