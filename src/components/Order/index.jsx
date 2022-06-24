import React from "react";
import { useSelector } from "react-redux";
import close from "../../assets/icons8-close-48.png";
import "./Order.scss";
import { deleteItemFromCart, deleteAllItems} from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


const Order = () => {
    const items = useSelector(state => state.cart.ItemsInCart);
    let totalPrice = items &&  items.reduce((acc, game) => acc += game.price, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let OnRemoveItem = (item) => {
        dispatch(deleteItemFromCart(item));
        if ( items.length === 1) {
            navigate("/");
        }
    };

    let OnSold = () => {
        dispatch(deleteAllItems());
        alert('The purchase is successful !');
        navigate('/');
    };

    return (
        <div className='order'>
            {items.length > 0 ? items.map(item => (
                <div key={item.id} className="order__item">
                    <div className="order__item-content">
                        <img src={item.image} alt="ItemImg" className="order__item-img" />
                        <h3 className="order__item-title">{item.name}</h3>
                    </div>
                    <div className="order__item-info">
                        <div className="order__item-price">{item.price} $</div>
                        <img src={close} alt="close" className="order__item-closeImg" onClick={() => OnRemoveItem(item)} />
                    </div>
                </div>
            )) :
                <div className="order__notFound">There are no games</div>
            }
            {items.length > 0 &&
            <div className="order__btn-row">
                <div className="order__total">Total price: {totalPrice} $</div>
                <button onClick={OnSold} className="order__btn  games__item-btn">Buy</button>
            </div>}
        </div>
    );
};

export default Order;
