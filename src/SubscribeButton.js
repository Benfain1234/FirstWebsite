import React from 'react';
import './SignUp.css'

class SubscribeButton extends React.Component  {
  
constructor(props){
  super(props);
  this.state={
    signInEmail: '',
    signInPassword: ''
  }
}

  onEmailChange =(event)=>{
    this.setState({signInEmail:event.target.value})
     
  }

onPasswordChange =(event)=>{
    this.setState({signInPassword:event.target.value})
  }

 onSubmitSignIn = () => {

          this.props.onroutechange();
     
  }



  render(){


  return(
<div>
      
      <input onClick={this.props.register}
       className=" ph5 pv4  white ba b--white bg-navy grow pointer  dib pointer" type="submit" value="subscribe for updates in the email"/>
      
</div>
   
    );
  }
}



export default SubscribeButton;