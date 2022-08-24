import axios from 'axios';
import React, { useState } from "react";

 // probando con key para uso de header en la API
const initalValue = {
    key:'PruebaTecnica',
    rut: '',
    activityCodes: ''
}



const FormularioComponent = () => {

    const [value, setValue] = useState(initalValue)
    const [respuesta, setRespuesta] = useState(null)

    // probando con key para uso de header en la API
    const { key, rut, activityCodes } = value;

    const handleChange = (e) => {
        const newValue = {
            ...value,
            [e.target.name]: e.target.value
        }

        setValue(newValue)
    }
//  validacion rut
    const validarRut = async () => {

        try {
            const response = await axios.get('https://finfasteastussoapapi.azurewebsites.net/api/test/getactivities', value)


            console.log(response.data);
            return response.data
        } catch (error) {
            console.log("hola aca estamos")
            return 'error';
        }
    }

    //para darle funcionalidad al boton tipo submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setRespuesta(await validarRut())

    }

    return (

        <div className='formulario shadow bg-white rounded ms-4 p-5'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-3'>

                        <div className='form-group'>
                            <label className="inputsForm"><b>Rut empresa</b></label>
                            <input
                                type='text'
                                className='form-control'
                                id='rut'
                                value={rut}
                                name='rut'
                                onChange={handleChange} />
                                {/* captar los cambios */}
                        </div>
                    </div>

                    <div className='col-5'>
                        <label className="inputsForm"><b>Actividad a asegurar</b></label>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                id='actividad'
                                value={activityCodes}
                                name='actividad'
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col-4 text-center'>
                        <button type='submit' className='botonCotizar rounded-pill btn btn-danger btn-lg mt-3 px-3'>Cotizar seguro</button>
                    </div>
                </div>
                <div className='error'>
                    {respuesta != null ? respuesta !== 'error' ? 'Datos correctos' : 'Datos incorrectos' : ''}
                {/* si respeusta es distinto de error y de null arrojara datos correctos, mostrando quise implementar
                un Modal pero me dio error demasiadas veces, caso contrario datos incorrectos */}
                </div>
            </form>
        </div>



    );


}

export default FormularioComponent;