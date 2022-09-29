import React from "react";
import Button from "../Button";
import GoBack from "../../Order/GoBack";
import { Carousel } from 'react-carousel-minimal';
import "./GamePage.scss";
import { useSelector } from "react-redux";

const GamePage = ({id}) => {
    let games = useSelector(state => state.dataGames.data);
    let game = games.find(item => item.id === id);

    let images = [];
    game?.photos.map(photo => {
        let item = {
            image: photo?.image 
        }
        return images.push(item);
    })

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <>
        <GoBack/>
        <div className="game-page">
            <div className="row">
            {game && <Carousel
                    data={images}
                    time={3000}
                    width="800px"
                    height="500px"
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        maxWidth: "850px",
                        maxHeight: "400px",
                    }}
                    />}                
            </div>  
            <div  onClick={e => e.preventDefault()} key={game?.id} className="games__item">
                    <img src={game?.image} alt="img" className="games__item-img" />
                    <div className="games__item-row">
                        <h3 className="games__item-title">{game?.name}</h3>
                        <div className="games__item-genres">
                        {game?.genres.genre.map((Genre, index) => (
                            <div key={index} className="games__item-genre">{Genre?.name}</div>
                        ))}
                        </div>
                        <div className="games__item-info">
                            <div className="games__item-price">{game?.price} $</div>
                            <Button item={game && game}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePage;
