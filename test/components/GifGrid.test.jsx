import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    const category = 'Apple';

    test('debe mostrar el mensaje de carga', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render( <GifGrid category={ category } limit={4}/> );

        expect( screen.getByText(category) );
        expect( screen.getByText('Cargando tus Gifs...') );
    });
    
    test('debe mostrar items cuando se cargan gifs en useFetchGifs', () => {
        const gifs = [
            {
                id: 'AAA',
                title: 'Primero',
                url: 'https://www.primero.com/'
            },
            {
                id: 'BBB',
                title: 'Segundo',
                url: 'https://www.segundo.com/'
            },
            {
                id: 'CCC',
                title: 'Tercero',
                url: 'https://www.tercero.com/'
            }
        ];

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } limit={3}/> );

        expect( screen.getAllByRole('img').length ).toBe(3);
    });
});
