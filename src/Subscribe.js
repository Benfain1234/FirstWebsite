import React from 'react';
import './SignUp.css'

class Subscribe extends React.Component {
	
constructor(props){
  super(props);
  this.state={
   email: '',
    password: '',
    name: ''
  }
}

onNameChange =(event)=>{
    this.setState({name:event.target.value})
     
  }

  onEmailChange =(event)=>{
    this.setState({email:event.target.value})
     
  }

onPasswordChange =(event)=>{
    this.setState({password:event.target.value})
    
  }

onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    
   
       
     this.props.onroutechange();
    
     
  }


render(){
  
  return(
<article className="br4 dark-gray mv4  mw5 shadow-5 center backg">
<main className="pa5 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph2 mh2">Subscribe</legend>
      <div className="mv3">
        <label className="db  lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange}
        className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db  lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onPasswordChange}
        className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <div className="mv3">
        <label className="db  lh-copy f6" htmlFor="Name">Name</label>
        <input onChange={this.onNameChange}
        className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
      </div>
    </fieldset>
    <div>
      <input onClick={this.onSubmitSignIn}
       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" type="submit" value="Subscribe"/>
     
    </div>
    
      
  
  </form>
</main>
</article>
		);
}
}
export default Subscribe;