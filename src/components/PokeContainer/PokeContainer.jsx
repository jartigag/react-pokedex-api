import React from 'react'

import './PokeContainer.css';

import { PokeCard } from './PokeCard'
import { PokeCardSkeleton } from './PokeCardSkeleton'

import { pokemonService } from './../../core/services/PokemonService'

export const PokeContainer = (props) => {
    const [state, dispatch] = React.useReducer(reducer, {
        pokemons: {
          data: [],
          error: undefined,
          loading: true
        }
    })

    React.useEffect(() => {
        dispatch({
            type: 'IS_LOADING_POKEMONS'
        })
        pokemonService.listAll().then(
          pokemons => {
            dispatch({
              type: 'LOADING_POKEMONS_SUCCESS',
              data: pokemons
            })
          }).catch(error => {
            dispatch({
                type: 'LOADING_POKEMONS_ERROR',
                data: error
            })
          });
    }, [])

    return (
        <div className="poke-container">
            {
                state.pokemons.loading
                ?
                Array.from(Array(10).keys()).map(() => (
                  <PokeCardSkeleton></PokeCardSkeleton>
                ))
                :
                state.pokemons.data
                .filter(pokemon => (
                    !props.inputText ||
                    pokemon.name.toLowerCase().includes(props.inputText.toLowerCase()) ||
                    pokemon.id.toString().toLowerCase().includes(props.inputText.toLowerCase()) ||
                    pokemon.types.join(',').toLowerCase().includes(props.inputText.toLowerCase()) //||
                    //pokemon.description.toLowerCase().includes(props.inputText.toLowerCase())
                ))
                .map(pokemon => (
                    <PokeCard pokemon={pokemon}></PokeCard>
                ))
            }
        </div>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
      case('IS_LOADING_POKEMONS'):
        return {
          ...state,
          pokemons: {
            loading: true,
            error: undefined,
            data: []
          }
        }
      case('LOADING_POKEMONS_SUCCESS'):
        return {
          ...state,
          pokemons: {
            loading: false,
            error: undefined,
            data: action.data
          }
        }
      case('LOADING_POKEMONS_ERROR'):
        return {
          ...state,
          pokemons: {
            loading: false,
            error: action.data,
            data: []
          }
        }
  
      // Default
      default:
        return state
    }
  }
    
  