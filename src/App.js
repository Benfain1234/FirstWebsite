import React,{Component} from 'react';
import Navigation from './Navigation/Navigation.js';
import FoodPyramid from './Food.js';
import Home from './Home.js';
import './App.css';
import Sports from './Sports.js';
import SubscribeButton   from './SubscribeButton';
import Subscribe from './Subscribe.js';
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
       route: 'Singin',
       user:{
        email: '',
        password: '',
        name: ''
       }
    }
  }
 


 Food=()=>{
  this.setState({route:'Food'});
 }
 register=()=>{
  this.setState({route:'register'});
 }
 signout=()=>{
  this.setState({route:'Singin'});
 }
 onroutechange=()=>{
  this.setState({route:'home'});
 }
  onInputChange =(event)=>{
    console.log(event.target.value);
  }
onSubmit=()=>{
console.log('click');
}
  render(){
  return (
    <div className="App">
      {this.state.route==='home'?
      <div>
     <Navigation signout={this.signout} Food={this.Food} />
     <Sports/>

     </div>
       :(this.state.route==='Singin'?
       <div>
     <Navigation signout={this.signout} Food={this.Food} home={this.onroutechange} />
      <Home/>
       <SubscribeButton onroutechange={this.onroutechange} register={this.register}/> 
        </div>
         :(this.state.route==='register'?
         <Subscribe  onroutechange={this.onroutechange}/>
         :<div>
         <Navigation signout={this.signout} Food={this.Food} home={this.onroutechange} />
         <FoodPyramid/>

         </div>))
      
   }
   
   
     
      
    </div>
  );
}
}
export default App;
