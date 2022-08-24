import React from "react";

//Componente coberturas contiene la informacion de la seccion media e inferior derecha

const CoberturasComponent = () => {

    return (

        <div className="row  text-center m-2">
            <h3><span classname="deemphasized">PRINCIPALES</span> <strong>COBERTURAS</strong>
                <p className="underline"><hr/></p>
            </h3>

            <div className="col">
                <p><b>Reponsabilidad Civil <br/>Cruzada</b></p>
                <p className="underline2"><hr /></p>
                <p><b>Responsabilidad Civil <br/>Patronal</b></p>
            </div>
            <div className="col">
                <p><b>Responsabilidad Civil <br/>por Transporte de Personas</b></p>
                <p className="underline2"><hr /></p>
                <p><b>Defensa <br/>penal del Asegurado</b></p>
            </div>

        </div>
    );

}

export default CoberturasComponent;