import { useState } from "react";
import {AddCategory, GifGrid} from './components';

export const GifProApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    // categories.push(newCategory)
    // setCategories(['Agregada', ...categories]) 
    // const onAddCategory = () => {setCategories( c => [ ...c, 'Agregada'])};

    return (
    <>
        <h1>GifProApp</h1>

        <AddCategory 
            onNewCategory={onAddCategory}
        />

        {
            categories.map(category => ( 
                <GifGrid 
                    key={category}
                    category={category}
                    limit={6}
                /> 
            ))
        }
    </>
    );
}