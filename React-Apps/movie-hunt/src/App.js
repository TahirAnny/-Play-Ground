import {React, useEffect} from "react";

const API_URL = 'http://www.omdbapi.com?apiKey=1a85dfc9';

const App = () => {


    const serachMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        serachMovies('spiderman');
    }, []);

    return(
        <h1>Hello!!!</h1>
    );
}

export default App;