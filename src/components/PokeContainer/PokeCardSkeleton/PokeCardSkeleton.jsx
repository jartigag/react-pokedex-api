import './PokeCardSkeleton.css';

export const PokeCardSkeleton = () => (
    <div className="poke-card-skeleton">
        <div className="poke-card-skeleton-header">
            <div className="poke-card-skeleton-header-name"></div>
            <div className="poke-card-skeleton-header-code"></div>
        </div>
        <div className="poke-card-skeleton-body">
            <div className="poke-card-skeleton-body-pokemon-img"></div>
            <div className="poke-card-skeleton-body-types">
                {
                    Array.from(Array(2).keys()).map(() => (
                        <span className="poke-card-skeleton-body-type-badge"></span>
                    ))
                }
            </div>
            <div className="poke-card-skeleton-body-details">
                <div className="poke-card-skeleton-body-details-content"></div>
            </div>
            <div className="poke-card-skeleton-body-description">
                Description
            </div>
        </div>
    </div>
)
    
  