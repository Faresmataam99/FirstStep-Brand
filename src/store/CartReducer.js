export default (state,action)=>{
    if(action.type == "addToCart"){
        return{
            ...state,
            counter:state.counter
        }
    }
}