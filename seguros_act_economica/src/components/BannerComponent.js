import React from 'react';
import banner from '../assets/img/banner.png'
import FormularioComponent from './FormularioComponent';

//Componente banner, contiene el fomulario

const BannerComponent = () => {
    return (
        <div className='margenBanner'>
            <div className='row posicionTextoTitulo'>
                <div className='col protegeMargen'>
                    <h1><strong>Protege tu empresa con seguros <br /> 100% online</strong></h1>
                    <h3 className='bannerLead'>Responsabilidad Civil General para Empresas</h3>
                    <h3 className='bannerLead'>Proteccion financiera para Empleadores</h3>
                </div>

            </div>
            <div className='margenFormulario'>
            <FormularioComponent/>
            </div>
        </div>
    )
}

export default BannerComponent;