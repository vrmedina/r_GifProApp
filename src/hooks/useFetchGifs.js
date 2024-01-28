import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category, limit ) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newGifs = await getGifs( category, limit );
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect(() => {
        return () => {
            getImages(category, limit);
        };
    }, []);
    
    return {
        gifs,
        isLoading
    }
}
