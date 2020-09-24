import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api.js';
import swal from 'sweetalert';

export default class BuyGame extends Component {
    state = {
        game: [],
    }

    componentDidMount() {
        this.searchDetails();
    }

    searchDetails = async () => {
        // Resgatando o id da URL
        const { id } = this.props.match.params;

        // Fazendo a busca, acessando a API
        const response = await api.get(`/games/${id}`);

        // Colocando o retorno da API dentro do state
        this.setState({ game: response.data });
    }

    success(e) {
        e.preventDefault();
        swal("Parabéns pela compra!", "Agora confira seu email, te enviamos algumas informações.", "success");
    }

    render(){
        const { game } = this.state;

        return(
            <div id="content-buy">
                <div id="card-payment">
                    <form>
                        <h2>Dados pessoais</h2>
                        <div id="name">
                            <label>
                                Nome completo
                            </label>
                            <input type="text" name="name" />
                        </div>
                        
                        <div id="cpf">
                            <label>
                                CPF
                            </label>
                            <input type="text" name="cpf" />
                        </div>

                        <div id="email">
                            <label>
                                EMAIL
                            </label>
                            <input type="text" name="email" />
                        </div>

                        <div id="address">
                            <label>
                                ENDEREÇO
                            </label>
                            <input type="text" name="address" />
                        </div>

                        <div id="number">
                            <label>
                                NÚMERO
                            </label>
                            <input type="text" name="number" />
                        </div>

                        <div id="city">
                            <label>
                                CIDADE
                            </label>
                            <input type="text" name="city" />
                        </div>

                        <div id="state">
                            <label>
                                ESTADO
                            </label>
                            <input type="text" name="state" />
                        </div>

                        <div id="card-data">
                            <h2>Dados do cartão</h2>
                            <div id="left-column">
                                <div id="name-card">
                                    <label>
                                        NOME IGUAL NO CARTÃO
                                    </label>
                                    <input type="text" name="name-card" />
                                </div>

                                <div id="card-number">
                                    <label>
                                        NÚMERO DO CARTÃO
                                    </label>
                                    <input type="text" name="card-number" />
                                </div>

                                <div id="valid">
                                    <label>
                                        VALIDADE
                                    </label>
                                    <input type="text" name="valid" />
                                </div>

                                <div id="cvv">
                                    <label>
                                        CVV
                                    </label>
                                    <input type="text" name="cvv" />
                                </div>

                                <div id="total">
                                    <label>
                                        TOTAL
                                    </label>
                                    <input disabled type="text" value={`R$${game.price}`} name="total" />
                                </div>

                                <button id="checkout" type="submit" onClick={this.success}>FINALIZAR PEDIDO</button>
                            </div>

                            <div id="right-column">
                                <img src={game.image} alt={game.name} title={game.name} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        ); 
    }
}