import weight from './../../../assets/img/icons/weight.svg'
import height from './../../../assets/img/icons/height.svg'

import './PokeCard.css';

export const PokeCard = (props) => (
    <div className={`poke-card background-${props.pokemon.types[0]}`}>
        <div className="poke-card-header">
            <div className="poke-card-header-name">
                { props.pokemon.name }
            </div>
            <div className="poke-card-header-code">
                #{ props.pokemon.id }
            </div>
        </div>
        <div className="poke-card-body">
            <img className="poke-card-body-pokemon-img" src={props.pokemon.img} alt="pokemon"/>
            <div className="poke-card-body-types">
                {
                    props.pokemon.types.map(type => (
                        <span className={`poke-card-body-type-badge background-${type}`}> 
                            { type } 
                        </span>
                    ))
                }
            </div>
            <div className={`poke-card-body-about color-${props.pokemon.types[0]}`}>
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
    
  