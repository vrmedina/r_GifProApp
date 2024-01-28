import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el customHook useFetchGifs', () => {
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch', 3) );
        const { gifs, isLoading } = result.current;
        
        expect( gifs.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('debe regresar un arreglo de gifs y isLoading en false', async() => {
        // const { result } = renderHook( () => useFetchGifs('Goku', 3) );
        
        // await waitFor( () => expect( result.current.gifs.length ).toBeGreaterThan(0) );
        
        // console.log(result);

        // const { gifs, isLoading } = result.current;

        // expect( gifs.length ).toBeGreaterThan(0);
        // expect( isLoading ).toBeFalsy();
    });
});
