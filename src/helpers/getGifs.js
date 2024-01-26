export const getGifs = async(category, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HXBATtGXpi0AmG2K5kgTZW7oWkoSoase&q=${category}&limit=${limit}`;

    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_width.url
    }));

    return gifs;
}