import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    // lo primero q veremos es como se maneja TypeScript para el useState
    // veremos TypeScript en los casos más típicos de React, los states, las props y los problemas q iremos encontrando

    // creamos nuestro estado
    const [number, setNumber] = useState<number | string>(5) // entre los símbolos <> le decimos q sea tipo de dato number o string

    // creamos una función para cambiar el estado, es decir cambiar el número
    const changeNumber = () => {
        setNumber('2')  // aqui ya no nos mostraría error xq arriba le hemos dicho q la función tmb puede recibir strings
    }

    return (
        <div className="App">
            {number}
            <button onClick={changeNumber}>Change Number</button>
        </div>
    );
}

export default App;
