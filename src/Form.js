import React, { Component } from 'react'
import './style.css'  

 class Form extends Component {
   state={
     name:'',
     dept:'',
     rating:'',
     tempArray:[]
   }
   funchanlar=(event)=>{
     this.setState=({
       [event.target.name]:event.target.value
     })
   }
   buttonhandlar=(event)=>{
   event.preventDefault()
   console.log(this.state);

   const tempobj={
     name:this.state.name,
     dept:this.state.dept,
     rating:this.state.rating
   }
   this.state.tempArray.push(tempobj)
   this.setState({
    name:'',
    dept:'',
    rating:''
   })
   }
  render() {
    return (
      <div className="formcontainer">
       <form action="">
          <label className='element' htmlFor="name">NAME</label>
          <input className='input-box' type="text" id='name' name='name' value={this.state.value} onChange={this.funchandlar} />
          <br />
          <label className='element' htmlFor="dept">DEPARTMENT</label>
          <input className='input-box' type="text" id='dept' name='dept' value={this.state.value} onChangr={this.funchandlar} />
          <br />
          <label className='element' htmlFor="rating">RATING</label>
          <input className='input-box' type="text" id='rating' name='rating' value={this.state.value} onChange={this.funchandlar} />
        </form>
          <button className='submitbtn' type='submit' onClick={this.buttonhandlar.bind(this)}>SUBMIT</button>
          <div className='output-container'>
          {this.state.tempArray.length >0 && this.state.tempArray.map((element)=>{
            return(
              <div className="inner-container">
                <h2> {element.name} || {element.dept} || {element.rating}</h2>
              </div>
            )
          })
           
          }
           
          </div>
      </div>
    )
  }
}

export default Form




