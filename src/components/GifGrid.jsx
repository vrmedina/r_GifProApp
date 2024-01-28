import PropTypes from 'prop-types';
import { GifCard } from './GifCard';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category, limit}) => {

    const {gifs, isLoading} = useFetchGifs( category, limit );

    return (
        <>
            <h3>{category}</h3>

            { isLoading && <h2>Cargando tus Gifs...</h2> }

            <div className='card-grid'>
                {
                    gifs.map( gif => 
                        <GifCard 
                            key={gif.id} 
                            { ...gif }
                        />
                    )
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired
}

GifGrid.defaultProps = {
}