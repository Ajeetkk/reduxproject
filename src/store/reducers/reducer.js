import actiontypes from '../constant/constant';
const INITIAL_STATE ={
    userName:'ajeet',
    lastName:'Kurrey'
}

export default (states = INITIAL_STATE, action)=>{
    switch(action.type){
        case actiontypes.CHANGEUSERNAME:
        return({
            ...states,
            userName:action.payload            
        })
        default:
            return states;
    }
}