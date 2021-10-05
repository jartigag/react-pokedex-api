import search from './../../assets/img/icons/search.svg'

import './Search.css';

export const Search = (props) => (
    <section>
        <input onChange={e => props.onSearch(e)} style={{backgroundImage: `url(${search})`}}></input>
    </section>
)
    
    
  