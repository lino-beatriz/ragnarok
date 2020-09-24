import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api.js';
import Marker from '../../icons/marker.png';
import { Link } from 'react-router-dom';

export default class GameDetails extends Component {
    state = {
        games: [],
    }

    // Metodo que busca os detalhes do produto selecionado assim que o componente for mostrado na tela
    componentDidMount() {
        this.searchDetails();
    }

    // Função para trazer todos os jogos que estão na banco de dados, atraves da API
    searchDetails = async () => {
        // Resgatando o id da URL
        const { id } = this.props.match.params;

        // Fazendo a busca, acessando a API
        const response = await api.get(`/games/${id}`);

        // Colocando o retorno da API dentro do state
        this.setState({ games: response.data });
    }

    render() {
        const { games } = this.state;

        return (
            <div id="content">
                <div className="details-card">
                    <div className="details-picture">
                        <img src={games.image} alt={games.name} title={games.name} />
                    </div>
                    
                    <div className="information-container">
                        <div className="game-name">
                            {games.name}
                        </div>

                        <div className="game-description">
                            {games.description}
                        </div>

                        <div className="platforms">
                            <strong>Plataformas:</strong> {games.platform}
                        </div>

                        <hr></hr>

                        <div className="game-price">
                            R$ {games.price}
                        </div>

                        <div className="buy-button">
                            <Link to={`/buy/${games.id}`}>
                                <button>COMPRAR</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="availability">
                    <div className="title-availability">
                        Disponível nas lojas
                    </div>
                    
                    <div className="subtitle-availability">
                        A nossa principal Loja está marcada no mapa
                    </div>

                    <div className="store-name">
                        <div className="marker-icon">
                            <img src={Marker} alt="Endereço" title="Endereço" /> 
                        </div>

                        <div className="store-address">
                            {games.stores}
                        </div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.781238508819!2d-46.83495678216503!3d-23.504387800617973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1600967329373!5m2!1spt-BR!2sbr" width="1018" height="390" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        );
    }
}