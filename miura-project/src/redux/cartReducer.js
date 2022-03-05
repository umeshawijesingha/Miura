const initialState={
    cartItems:[]
}

export const cartReducer=(state=initialState,action)=>{
    var newItem;
    switch(action.type){
       
        case 'ADD_TO_CART': 
       var newItem=state.cartItems.filter((obj)=>{return obj.id!==action.payload.id})
        console.log("yyyyy" + newItem.price)
      console.log("----------------")
      console.log(action.payload)
        return{
            ...state,
            cartItems:[...state.cartItems,action.payload]

        }
        case 'DELETE_FROM_CART': return{
            ...state,
            cartItems:state.cartItems.filter((obj)=>{return obj.id!==action.payload.id}),
           
        }
        default:return state;
    }

}