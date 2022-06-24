import {React, useState }from 'react'
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";


function Button({item}) {
    const [value, setValue] = useState( item.inCart);
    const dispatch = useDispatch();

    let addItem = (item, e) => {
        let Value = true;
        setValue(Value);
        dispatch(setItemInCart(item));
        e.stopPropagation();
    };

    let removeItem = (item, e) => {
        let Value = false;
        setValue(Value);
        dispatch(deleteItemFromCart(item));
        e.stopPropagation();
    };
        
    return (
        !value ?  <div onClick={(e) => addItem(item, e)} className="games__item-btn">Add to cart</div> :
        <div onClick={(e) => removeItem(item, e)} className="games__item-btn remove">Remove from cart</div> 
    )
}

export default Button;