import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api.js';
import Banner from '../../images/banner.jpg';
import { Link } from 'react-router-dom';


export default class Main extends Component {
    state = {
        games: [],
    }

    // Primeiro metodo a ser executado assim que o componente for mostrado em tela
    componentDidMount() {
        this.loadGames();
    }

    // Função para trazer todos os jogos que estão na banco de dados, atraves da API
    loadGames = async () => {
        // Acessando a API
        const response = await api.get('/games');

        // Salvando o retorno da API no state
        this.setState({ games: response.data });
    };

    render() {
        return (
            <>
                <div className="banner">
                    <img src={Banner} alt="Ragnarok" title="Os melhores jogos, com os melhores preços" />
                </div>

                <div className="catalog-container">
                    <div className="catalog-title">
                        <strong>Catálogo</strong>
                    </div>

                    <div className="game-list">
                            {this.state.games.map(game => (
                                <Link to={`/games/${game.id}`}>
                                    <img className="zoom" src={game.image} key={game.id} alt={game.name} title={game.name} />
                                </Link>
                            ))}
                    </div>
                </div>
            </>
        );
    }
}