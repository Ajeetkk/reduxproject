import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
  render() {
    return (
  
         <div>
            <h1>Hello About {this.props.userName} &nbsp; {this.props.lastName} </h1> 
            <Link to='/'>Go to Home</Link>
         </div>
    );
  }
}

function mapStateToProps(state){
  return({
     userName: state.rootReducer.userName,
     lastName: state.rootReducer.lastName
  })
 }
 function mapDispatchToProps(dispatch){
   return({
 
   })
 }

export default connect(mapStateToProps,mapDispatchToProps)(About);
