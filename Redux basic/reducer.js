const initialState={
    message:"subscribe"
}

const reducer=(state=initialState,action)=>{
const newState={...state}
if(action.type==="Message change"){
newState.message="Thank you Subscribed";
}
return newState;
};
export default reducer;
