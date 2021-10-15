import search from './../../assets/img/icons/search.svg'

import './Search.css';

const pokemonGenerationOptions = [
    {
        label: 'Primera generación',
        value: '1'
    },
    {
        label: 'Segunda generación',
        value: '2'
    },
    {
        label: 'Tercera generación',
        value: '3'
    },
    {
        label: 'Cuarta generación',
        value: '4'
    },
    {
        label: 'Quinta generación',
        value: '5'
    }
]

export const Search = (props) => (
    <section>
        <select onChange={e => props.onSelect(e)} value={props.generationValue}>
            {
                pokemonGenerationOptions.map(option => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
        <input onChange={e => props.onSearch(e)} style={{backgroundImage: `url(${search})`}}></input>
    </section>
)
    
    
  