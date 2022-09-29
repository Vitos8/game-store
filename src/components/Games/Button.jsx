import {React, useState }from 'react'
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";
import {changeInCartValue} from "../../redux/dataGames/dataGamesSlice";


function Button({item}) {
    const dispatch = useDispatch();

    let addItem = (item, e) => {
        dispatch(setItemInCart(item));
        dispatch(changeInCartValue(item.id));
        e.stopPropagation();
    };

    let removeItem = (item, e) => {
        dispatch(deleteItemFromCart(item)); 
        dispatch(changeInCartValue(item.id));
        e.stopPropagation();
    };
        
    return (
        !item?.inCart ?  <div onClick={(e) => addItem(item, e)} className="games__item-btn">Add to cart</div> :
        <div onClick={(e) => removeItem(item, e)} className="games__item-btn remove">Remove from cart</div> 
    )
}

export default Button;