import React, {Component} from 'react';  
import {random} from 'lodash'
import Quote from './Components/Quote' 
import './App.css'

class App extends Component{ 
  constructor(props){
    super(props) 
    this.state = {
      quotes: [], 
      selectedQuoteIndex: null
    } 
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this)  
    this.getNewIndex = this.getNewIndex.bind(this)

  } 
  async  componentDidMount(){ 
    const res =  await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    const json = await res.json()
    this.setState({
      quotes: json
      
    }, this.getNewIndex
      
    )
    
    

  
    
    
  } 
  get selectedQuote(){ 
     if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
       return undefined;
     } 
     return this.state.quotes[this.state.selectedQuoteIndex]

  } 
  getNewIndex(){
    this.setState({
      selectedQuoteIndex: this.selectQuoteIndex()
    })
  }
  selectQuoteIndex(){
    if(!this.state.quotes.length){
      return undefined;
    } 
    return random(0, this.state.quotes.length - 1)
  }
    nextQuoteClickHandler(){
    window.alert("hello!")
  }
  render(){  
    
    
    return(
      <div className="container" id="quote-box"> 
        { 
          this.selectedQuote ? 
        <Quote selectedQuote={this.selectedQuote} getNewIndex={this.getNewIndex}/> 
        : null 
        }
        </div>
    )
  }
}

export default App;
