import { fireEvent, render, screen } from "@testing-library/react";
import { GifProApp } from "../src/GifProApp";

describe('Pruebas en <GifProApp/>', () => {
    test('debe coincidir con el snapshot', () => {
        const { container } = render( <GifProApp /> );
        expect(container).toMatchSnapshot();
    });

    test('debe agregar una nueva categoria', () => {
        render( <GifProApp /> );
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        fireEvent.input(input, { target: { value: 'Vegeta' } });
        fireEvent.submit(form);

        expect( screen.getByText('Goku') )
        expect( screen.getByText('Vegeta') )
    });

    test('no debe agregar una categoria que ya exista', () => {
        render( <GifProApp /> );
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        fireEvent.input(input, { target: { value: 'Goku' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Goku' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    });
});