import './App.css';
import { PokeCard } from './components/PokeCard'

const pokemons = [
  {
    code: '001',
    name: 'Bulbasaur',
    types: [
      {
        name: 'Grass',
        color: '#74CB48'
      },
      {
        name: 'Poison',
        color: '#A43E9E'
      }
    ],
    weight: '6,9',
    height: '0,7',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'
  },
  {
    code: '004',
    name: 'Charmander',
    types: [
      {
        name: 'Fire',
        color: '#F57D31'
      }
    ],
    weight: '8,5',
    height: '0,6',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'
  },
  {
    code: '007',
    name: 'Squirtel',
    types: [
      {
        name: 'Water',
        color: '#6493EB'
      }
    ],
    weight: '9,0',
    height: '0,5',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
  },
  {
    code: '012',
    name: 'Butterfree',
    types: [
      {
        name: 'Bug',
        color: '#A7B723'
      },
      {
        name: 'Flying',
        color: '#A891EC'
      }
    ],
    weight: '32,0',
    height: '1,1',
    description: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.'
  },
  {
    code: '025',
    name: 'Pikachu',
    types: [
      {
        name: 'Electric',
        color: '#F9CF30'
      }
    ],
    weight: '6,0',
    height: '0,4',
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.'
  },
  {
    code: '092',
    name: 'Gastly',
    types: [
      {
        name: 'Ghost',
        color: '#70559B'
      }
    ],
    weight: '0,1',
    height: '1,3',
    description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.'
  }
]

function App() {
  return (
    <div className="container">
      {
        pokemons.map(pokemon => (
          <PokeCard pokemon={pokemon}></PokeCard>
        ))
      }
    </div>
      
  );
}

export default App;
