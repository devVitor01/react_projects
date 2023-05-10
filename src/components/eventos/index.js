import React from "react";
import EventosBanner from '../../assets/eventos-image.jpg';

const Eventos = () =>(
    <section className="box-section">
            <div className="hidden">
            <img src={EventosBanner} /> 
            </div>

        <div className="box-section-text">
            <h1>Nossos eventos</h1>
            <h3>Delicias com sorvete!</h3>

            <p>
                Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente!
            </p>
        </div>

        <div className="hidden2 image-eventos">
           <img src={EventosBanner} /> 
        </div>
    </section>
)

export default Eventos;