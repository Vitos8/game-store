import {React, useState} from "react";
import CartIcon from '../../../assets/cart.png';
import "./Cart.scss";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    let naivgate = useNavigate();
    const [visibleModal, setVisibleModal] = useState(false);
    const items = useSelector(state => state.cart.ItemsInCart)

    let toOrder = () => {
        naivgate('/Order');
        setVisibleModal(false);
    };

    return (
    <div className="cart">
        <div className="cart__icon-row">
            <img src={CartIcon} alt="cart" className="cart__icon" onClick={() => setVisibleModal(!visibleModal)} />
            {items.length > 0 ? <div className="cart__icon-circle">{items.length}</div> : null}
        </div>
        {visibleModal && <div className="modal" >
                {items.length > 0 ?  <div className="modal__games">
                    {items.map(item => (
                        <div key={item.id} className="modal__game">
                            <h4 className="modal__game-title">{item.name}</h4>
                            <span className="modal__game-price">{item.price} $</span>
                        </div>
                    ))}
                        <div className="modal__button games__item-btn" onClick={() => toOrder()}>Order</div>
                </div> 
                : <h2 className="modal__notFound">There are no games here</h2> }
        </div> }
    </div>
    );
};

export default Cart;