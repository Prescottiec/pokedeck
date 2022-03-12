import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonIndex extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }

    render() {
        return(
            <div className="pokemon-row">
                {this.state.pokemon ? (
                    <div className="row">
                        <ul>
                            {this.state.pokemon.map(pokemon => (
                                <PokemonCard 
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            ))}
                        </ul>
            </div>
        ) : (
          <h1>Drawing Cards...</h1>
        )}
            </div>
        )
    }
}