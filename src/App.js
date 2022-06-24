import { React, useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import Header from "./components/Header";
import Games from "./components/Games";
import Order from "./components/Order";
import GamePage from "./components/Games/GamePage/index";

function App() {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(null);
    let navigate = useNavigate();


    const API = '0c87644384c949b1b4fc1c5e98f4b806';
    const URL = `https://api.rawg.io/api/games?key=${API}`;

    

    let getApi = (data) => {
        let items = [];

        data.map(item => {
            let newItem = {
                name: item.name,
                image: item.background_image,
                id: item.id,
                photos: item.short_screenshots,
                price: item.metacritic ? item.metacritic : 65,
                genres: {
                    genre: [...item.genres]
                }
            }

            items.push(newItem);
        });
        
        setGames(items);
    };

    useEffect(() => {
        
        axios.get(`${URL}&page=2`).then((res )=>{
            
            let newData = [...res.data.results];
            getApi(newData);
        });

    }, []);

    let paginate = (page) => {
        axios.get(`${URL}&page=${page}`).then(({data}) => {
            let newData = [...data.results];
            getApi(newData);
        })
    };

    let onGame = (game, e) => {
        setActive(game);
        e.preventDefault();
        navigate('/game/' + game.name);
    };

    
    return (
                <div className="app">
                    <div className="game-store">
                        <div className="container">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Games active={onGame} paginate={paginate} data={games} />} />
                            <Route path="/Order" element={<Order />} />
                            <Route path="/game/:title" element={<GamePage game={active} />} />
                        </Routes>
                        </div>
                        <div className="footer">
                            <div className="container">
                                <p className="footer__title">
                                    Created by Vitalik Golubovich
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default App;
