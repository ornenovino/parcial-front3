//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({pokemons}){

  return (
    <div>

      <h2>Tus Pokémones:</h2>
      {pokemons.map((pokemon, index) => ( 
            <div key={index} className="card">
                <p>{pokemon.name} {pokemon.type}</p>
            </div>
        ))}  
    </div>
  )
}

export default Card;
