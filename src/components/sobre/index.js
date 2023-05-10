import React from "react";
import SobreBanner from '../../assets/sobre-image.jpg';

const Sobre = () =>(
    <section className="box-section">
            <div className="image-sobre">
            <img src={SobreBanner} /> 
            </div>

            <div className="box-section-text">
                <h1>Sobre Nós</h1>
                <h3>Alegria em cada casquinha!</h3>

                <p>
                Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                </p>
            </div>
    </section>
)

export default Sobre;