import { React, useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setDataGames } from "./redux/dataGames/dataGamesSlice";

import Header from "./components/Header";
import Games from "./components/Games";
import Order from "./components/Order";
import GamePage from "./components/Games/GamePage/index";

function App() {
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(null);
    const [activePage, setActivePage] = useState(1);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let games = useSelector(state => state.dataGames.data);

    const API = '0c87644384c949b1b4fc1c5e98f4b806';
    const URL = `https://api.rawg.io/api/games?key=${API}`;

    let getApi = (data) => {
        let newItems = data.map(item => {
            let newItem = {
                name: item.name,
                image: item.background_image,
                id: item.id,
                photos: item.short_screenshots,
                price: item.metacritic ? item.metacritic : 65,
                inCart: false,
                genres: {
                    genre: [...item.genres]
                }
            }
            return newItem;
        });
        
        return newItems ? dispatch(setDataGames(newItems)) : null ;
    };

    useEffect(() => {
        setLoading(true);
        axios.get(`${URL}&page=2`).then((res )=>{
            let newData = [...res.data.results];
            getApi(newData);
            setLoading(false);
        }).catch((err) => {
            alert(err);
        });
    }, []);

    let paginate = (page, id) => {
        setLoading(true);
        setActivePage(id);
        axios.get(`${URL}&page=${page}`).then(({data}) => {
            let newData = [...data.results];
            getApi(newData);
            setLoading(false);
        })
    };

    let onGame = (game, e) => {
        setActive(game.id);
        e.preventDefault();
        navigate('/game/' + game.name);
    }
    
    return (
                <div className="app">
                    <div className="game-store">
                        <div className="container">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Games loading={loading} activePage={activePage} active={onGame} paginate={paginate} data={games} />} />
                            <Route path="/Order" element={<Order />} />
                            <Route path="/game/:title" element={ <GamePage id={active} />} />
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
