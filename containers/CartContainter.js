import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart';


const CartContainer = () => {
    const result = useSelector(state => state);
    return <Cart cart={result} />
};

export default CartContainer;