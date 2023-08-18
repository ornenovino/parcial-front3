import { useState } from "react";

function Form({onAddPokemon}) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name >= 3 && name.charAt(0) !== ' ' && type >= 6) {
            onAddPokemon({name, type});
            setName("");
            setType("");
        } else {
            alert("Chequea que la información sea correcta");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
            <button type="submit">Agrega un Pokémon</button>
        </form>        
    )
}

export default Form;