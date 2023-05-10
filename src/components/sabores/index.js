import React from "react";
import SaboresBanner from '../../assets/banner-sabores.jpg';

const Sabores = () =>(
    <section className="box-section">
        <div className="image-sabores">
           <img src={SaboresBanner} /> 
        </div>

        <div className="box-section-text">
            <h1>Nosos Sabores</h1>
            <h3>Novos e deliciosos!</h3>

            <p>
                Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
            </p>
        </div>
    </section>
)

export default Sabores;