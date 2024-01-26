import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        setInputValue('');
        onNewCategory(newInputValue);
        // setCategories(categories => [inputValue, ...categories])
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
            <button onClick={onSubmit}>Buscar</button>
        </form>
    );
}