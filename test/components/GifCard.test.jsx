import { render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components/GifCard';

describe('Pruebas en <GifCard/>', () => {
    const title = 'Test Prueba';
    const url = 'https://www.test.test/';

    test('debe coincidir con el snapshot', () => {
        const {container} = render(<GifCard title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la img con el alt y el url indicados', () => {
        render(<GifCard title={title} url={url}/>);
        const { alt, src } = screen.getByRole('img');
        expect( alt ).toBe(title);
        expect( src ).toBe(url);
    });

    test('debe mostrar el titulo en el componente', () => {
        render(<GifCard title={title} url={url}/>);
        expect( screen.getByText(title) ).toBeTruthy();  
    });
});
