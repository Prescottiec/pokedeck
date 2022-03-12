import React, { Component } from 'react'

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    image: true
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex  
    })
  }


  render() {

    return (
      <div className="pokemon-card">
        <div className="pokemon-card-box">
          <div className="pokemon-card-info">
              {this.state.name}
          </div>
        </div>
      </div>
    )
  }
}
