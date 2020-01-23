import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardaError] = useState(false);

    //Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN(cantidad)){
            guardaError(true);
            return;
        }
        //si pasa la validacion
        guardaError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;