import weight from './../../assets/img/icons/weight.svg'
import height from './../../assets/img/icons/height.svg'

import './PokeCard.css';

const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

export const PokeCard = (props) => (
    <div className="poke-card" style={{ backgroundColor: props.pokemon.types[0].color }}>
        <div className="poke-card-header">
            <div className="poke-card-header-name">
                { props.pokemon.name }
            </div>
            <div className="poke-card-header-code">
                #{ props.pokemon.code }
            </div>
        </div>
        <div className="poke-card-body">
            <img className="poke-card-body-pokemon-img" src={ `${imgUrl}${props.pokemon.code}.png` } alt="pokemon"/>
            <div className="poke-card-body-types">
                {
                    props.pokemon.types.map(type => (
                        <span className="poke-card-body-type-badge"  style={{ background: type.color }}> 
                            { type.name } 
                        </span>
                    ))
                }
            </div>
            <div className="poke-card-body-about" style={{ color: props.pokemon.types[0].color }}>
                About
            </div>
            <div className="poke-card-body-details">
                <div className="poke-card-body-details-content">
                    <div className="poke-card-body-details-content-data">
                        <img className="poke-card-body-details-content-data-img" src={weight} alt="weight-icon"/>
                        { props.pokemon.weight } kg
                    </div>
                    <div className="poke-card-body-details-content-title">
                        Weight
                    </div>
                </div>

                <div className="poke-card-body-details-separator"></div>

                <div className="poke-card-body-details-content">
                    <div className="poke-card-body-details-content-data">
                        <img className="poke-card-body-details-content-data-img" src={height} alt="height-icon"/>
                        { props.pokemon.height } m
                    </div>
                    <div className="poke-card-body-details-content-title">
                        Height
                    </div>
                </div>
            </div>
            <div className="poke-card-body-description">
                { props.pokemon.description }
            </div>
        </div>
    </div>
)
    
  