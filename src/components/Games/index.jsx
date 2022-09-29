import React from "react";
import Button from "./Button";
import "./Games.scss";
import Loading from "./Loading";

const Games = ({data, paginate, active}) => {
    
    let pagination = [
    {
        id:1,
        page:2
    },
    {
        id:2,
        page:7
    },
    {
        id:3,
        page:11
    }]

    return (
    <>
    <div className="games">
        {data ? data.map((game, id) => (
            <div onClick={(e) => active(game, e)} key={id} className="games__item">
                <img src={game.image} alt="img" className="games__item-img" />
                <div className="games__item-row">
                    <h3 className="games__item-title">{game.name}</h3>
                    <div className="games__item-genres">
                    {game.genres.genre.map((Genre, index) => (
                        <div key={index} className="games__item-genre">{Genre.name}</div>
                    ))}
                    </div>
                    <div className="games__item-info">
                        <div className="games__item-price">{game.price} $</div>
                        <Button item={game} itemIndex={id}/>
                    </div>
                </div>
            </div>
        )) :
        <Loading/>}
    </div>
    <div className="pagination">
            {pagination.map(item =>(
                <div key={item.id} onClick={() => paginate(item.page)} className="paginate">{item.id}</div>
            ))}
        </div> 
    </>
    );
};

export default Games;