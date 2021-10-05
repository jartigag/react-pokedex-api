import pokeball from './../../assets/img/icons/pokeball.svg'

import './MainHeader.css';

export const MainHeader = () => (
    <header className="header">
        <div className="header-handler">
            <img className="header-img" src={pokeball} alt="pokeball" />
            My Pokedex
        </div>
    </header>
)
    
  