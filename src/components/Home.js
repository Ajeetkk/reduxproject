import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {changeState} from '../store/actions/action';
class Home extends Component {
  

  constructor(props) {
		super(props);
    this.state = {      
      userName:''
    };
    
    }
  _changeState(){
    this.props.changeStateToReducer(this.state.userName);
    this.setState({
      userName:this.state.userName
    })
  }

  _changeUserInput(event){
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
  
         <div>
            <h1>Hello Home {this.props.userName} &nbsp; {this.props.lastName}</h1>


                <Button onClick={this._changeState.bind(this)}>Change State</Button>
                <input type='text' value={this.state.userName} onChange={this._changeUserInput.bind(this)}></input>
           
                <Link to='/About'>Go to About</Link>
         </div>
    );
  }
}


function mapStateToProps(state){
  return({
        userName: state.rootReducer.userName,
        lastName: state.rootReducer.lastName,
  })
}

function mapDispatchToProps(dispatch){
  return({
      changeStateToReducer: (updatedUserName)=>{
          dispatch(changeState(updatedUserName))
      }
  })

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
