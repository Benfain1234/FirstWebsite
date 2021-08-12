import React,{Component}from 'react';
import './Navigation.css';
class Navigation extends Component {
render(){
 const {signout,Food,home}=this.props;
return(
<nav>
<p onClick={signout} className='f3 link   pa3 pointer'> Home Page</p>
<p onClick={Food} className='f3 link    pa3 pointer'> Food Pyramid</p>
<p onClick={home} className='f3 link    pa3 pointer'>Popular Sports</p>
</nav>

	);

}
}
export default Navigation;