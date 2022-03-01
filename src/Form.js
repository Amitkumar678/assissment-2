import React, { Component } from 'react'
import './style.css'

 class Form extends Component {
     state={
         name:"",
         dept:"",
         rating:"",
         user:[]
     }
     handalChange=(event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
     }
     handalsubmit = (event)=>{
     event.preventDefault()
     console.log(this.state)


       const tempobj={
        name:this.state.name,
        dept:this.state.dept,
        rating:this.state.rating
        }


        const tempArr = this.state.user;
         tempArr.push(tempobj);
        this.setState({user:tempArr});
     }
     
    
  render() {
    return (
      <>
      <div className='container'>
      <h1> Employee Feedback Form</h1> 
      <div>
          <form>
              <label  className='lb1' For="name">NAME</label>
              <input className='input1' type="text" id='name' name='name' onChange={this.handalChange} value={this.state.name} />
              <br />
              <label className='lb1' For="dept">DEPARTMENT</label>
              <input className='input2' type="text" id='dept' name='dept' onChange={this.handalChange} value={this.state.dept} />
              <br />
              <label className='lb1' For="rate">RATING</label>
              <input className='input3' type="number" id='rate' name='rating' onChange={this.handalChange} value={this.state.rating} />
              <br />
              <button className='sub1' onClick={this.handalsubmit}>SUBMIT</button>
          </form>
          {this.state.user.map((value,index)=>{
            return(
              
            
                <div className='rtn1'>
              {value.name} || {value.dept} || {value.rating}
              
              </div>
            
              
            )
          })}
      </div>
      </div>
      </>
    )
  }
}

export default Form