import {useReducer, useContext, createContext} from 'react'
import {PropTypes} from 'prop-types'

const CartContext = createContext(null);

const cartReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART': {
            const existItem = state.items.find(item=>item.id===action.payload.id);
            if(existItem){
                return{
                    ...state,
                    items: state.map(item=>item.id === action.payload.id ? {...item, quatntity:item.quatntity +1}
                    : item
                    ),
                total : state.total + action.payload.price,
            };
        };
        return {
            ...state, 
            items : [...state.items, action.payload],
            price : state.total + action.payload.price,
        };
    }
    case 'REMOVE_FROM_CART':{
        const item = state.items.find(item=>item.id===action.payload.id);
        return{
            ...state,
            items: state.items.filter(item=>item.id!==action.payload.id),
            price : state.total - (item ? item.price*item.quantity : 0),
        };
    };
    case 'UPDATE_FROM_CART':{
        const item = state.items.find(item=>item.id===action.payload.id);
        if(!item) return state;
        const quaChange = action.payload.quantity - item.quantity;
        return{
            ...state,
            items : state.map(item => item.id === action.payload.id ? {...item,quantity:action.payload.quantity} :item ),
            total : state.total + (quaChange*item.price ),
        }

    }
    case 'CLEAR_CART':
        return {
          items: [],
          total: 0,
        };
    default:
        return state;
}
};
export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(cartReducer, {items:[],total:0});
    return (
        <CartContext.Provider value={{ state, dispatch }}>
          {children}
        </CartContext.Provider>
      );
}
CartProvider.PropTypes={
    children: PropTypes.node.isRequired,

};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };