import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    // lo primero q veremos es como se maneja TypeScript para el useState
    // veremos TypeScript en los casos más típicos de React, los states, las props y los problemas q iremos encontrando

    // aquí creamos nuestro estado, q esta vez será un array de objetos
    const [subs, setSubs] = useState([
        {
            nick: 'dapelu',
            subMonths: 3,
            avatar: 'https://i.pravatar.cc/150?u=dapelu',
            description: 'Dapelu hace de moderador a veces'
        },
        {
            nick: 'sergio_serrano',
            subMonths: 7,
            avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
        }
    ])

    return (
        <div className="App">
            <h1>midu subs</h1>
            <ul>
                {
                    subs.map(sub => {
                        return (
                            <li key={sub.nick}>
                                <img src={sub.avatar} alt={`Avatar para ${sub.nick}`} />
                                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                                <p>{sub.description?.substring(0,100)}</p>  {/* el operador ? es un Openning Chaining (operador opcional) */}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;
