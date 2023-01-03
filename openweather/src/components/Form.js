import React, {useState} from 'react';

const Form = () => {
//1º Crearemos estado que hace referencia a la ciudad que vamos a estar buscando
    const [city, setCity] = useState("");
// Hugs= para establecer la ciudad que estamos buscando. Estado = city; setCity = Funcion que modificará su estado;  useState = lo vamos a establecer como un valor de texto vacio

    const onSubmit =  (e) => {
        e.preventDefault();
        console.log ({city});
        if (city === "" || !city) return;
    }

    return (
//2º Crearemos un evento onSubmit, que lo que hace es que cuando se actalice ejecutará una funcion
        <div className='container'>
            <form onSubmit={onSubmit}>

                <div className='input-group mb-3 mx-auto'>

                    <input type='text' className='form-control' placeholder='Ciudad' onChange={(e) =>setCity(e.target.value)}/>
                    <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>
                </div>

            </form>

        </div>
    );
}

export default Form;