import React from 'react'
import axios from 'axios';

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

        pokemonService.listDetailed().then(
          pokemons => {
            dispatch({
              type: 'LOADING_POKEMONS_SUCCESS',
              data: pokemons
            })
          }).catch(err => console.log('err',err));

        //async function fetchPokemons() {
        //    dispatch({
        //        type: 'IS_LOADING_POKEMONS'
        //    })
////
        //    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        //    .then(
        //        response => {
        //            console.log('response', response)
        //            const response_pokemons = response.data.results;
        //            console.log('response po', response_pokemons)
        //            Promise.all(
        //                response_pokemons.map(rp => axios.get(rp.url).then(r => r.data))
        //            )
        //            .then(allPokemonData => {
        //                dispatch({
        //                    type: 'LOADING_POKEMONS_SUCCESS',
        //                    data: allPokemonData.map(p => (
        //                        {
        //                            id: p['id'],
        //                            name: p['name'],
        //                            height: parseInt(p['height']) / 10,
        //                            weight: parseInt(p['weight']) / 10,
        //                            types: p['types'].map(type => type.type.name),
        //                            img: p['sprites']['other']['official-artwork']['front_default'],
        //                            alt_img: p['sprites']['other']['dream_world']['front_default'],
        //                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus. Nam quis mauris elementum, ullamcorper sem non, convallis mi. Sed a bibendum sapien, non posuere ligula. Morbi sit amet maximus purus. Nulla eu pulvinar ante. Nulla gravida luctus convallis. Duis suscipit vel nisi et tincidunt. Aenean velit purus, rutrum euismod justo id, porta tincidunt orci. Curabitur quis nibh elit. Etiam ornare tortor ac nibh commodo dapibus. Proin vehicula erat sit amet lacus posuere tincidunt.'
        //                        }
        //                    ))
        //                })
        //            })
        //            .catch(e => {
        //                dispatch({
        //                    type: 'IS_LOADING_POKEMONS',
        //                    data: 'Error en el Promise.All'
        //                })
        //                console.error('error', e)
        //            });
        //        }
        //    )
        //    .catch(e => {
        //        dispatch({
        //            type: 'IS_LOADING_POKEMONS',
        //            data: 'Error en el list'
        //        })
        //        console.error('error', e)
        //    });
//
        //}
//
        //fetchPokemons()
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
    
  