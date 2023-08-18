import { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import "./App.css"

function App() {
  
  const [pokemons, setPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    setPokemon([...pokemons, pokemon])
  };

  let content;

  if (pokemons.length > 0) {
    content = <Card pokemons={pokemons}/>
  }

  return (
    <div className="App">
      <h1>¡Coloca un Pokémon!</h1>
      <Form onAddPokemon={addPokemon}/>
      {content}
    </div>
  );
}

export default App;
