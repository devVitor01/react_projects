import React from "react";
import './style.css';

import img1 from '../../../assets/sobre-image.jpg';
import img2 from '../../../assets/sorveteria.jpg';

const SobreMain = () =>(
    <section className="sobre-main">
        <article className="largura-limitada">
            <h1>Sobre Nós</h1>
            <h3>Nós simplesmente amamos sorvete!</h3>

            <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
            </p>

            <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
            </p>

        </article>

        <div className="sobre-galeria">
            <div className="sobre-box">
                <img src={img1} />
            </div>
            
            <div className="sobre-box">
                <img src={img2} />
            </div>
        </div>
    </section>
)

export default SobreMain;