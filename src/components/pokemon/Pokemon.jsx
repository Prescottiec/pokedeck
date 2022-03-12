import React, { Component } from 'react'

export default class Pokemon extends Component {
    state = {
        name: '',
        base_experience: '',
        height: '',
        weight: '',
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''// this is the image url
                }
            }
        }
    };

  render() {
    return (
      <div>Pokemon</div>
    )
  }
}
