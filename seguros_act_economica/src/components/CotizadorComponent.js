import React from "react";
import BannerComponent from "./BannerComponent";
import FormularioComponent from "./FormularioComponent";
import referencia from "../assets/img/referencia.png"
import InfoComponent from "./InfoComponent";
import CoberturasComponent from "./CoberturasComponent";

// Componente que une todos los componentes de la app

const CotizadorComponent = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="fondo row">
                        <BannerComponent />
                    </div>
                    <div className="row info2 ">
                        <div className="col">
                            <h1 className="tituloInfo">Responsabilidad Civíl General para Empresas</h1>
                            <br/>
                        <InfoComponent />
                        </div>
                        <div className="col coberturas2">
                        <CoberturasComponent />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col">
                        </div>
                        <div className="col img-referencial ">
                            <img className="" src={referencia} alt="imagen referencial" />
                        </div>
                        <div className="col">
                        </div>
                    </div>

                    <div className="row info2">
                    <div className="row ">
                        <div className="col">
                        <h1 className="tituloInfo">Protección Financiera <br/>para Empleadores</h1>
                        <br/>
                        <InfoComponent />
                        </div>
                        <div className="col coberturas2">
                        <CoberturasComponent />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default CotizadorComponent;