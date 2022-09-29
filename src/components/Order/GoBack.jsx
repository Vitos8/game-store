import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteAllItems} from "../../redux/cart/reducer";


const GoBack = () => {
    let navigate = useNavigate();

    let goBack = () => {
        navigate(-1);
    };

    return (
        <div className="goBack">
            <button  onClick={() => goBack()} className="goBack__btn games__item-btn">Go back</button>
        </div>
    );
};

export default GoBack;
