import React from 'react';
import './style.css';

import Oreo from '../../../assets/sabor-oreo.png';
import Pistache from '../../../assets/sabor-pistache.png';
import Cookies from '../../../assets/sabor-cookies-avela.png';
import Kiwi from '../../../assets/sorbet-kiwi.png';
import Morango from '../../../assets/sorbet-morango.png';
import Limao from '../../../assets/sorbet-limao.png';

const SaboresMain = () =>(
    <section className='sabores-main'>
        <div className='sabores-main-container largura-limitada'>
            <h2>SABORES DE SORVETE</h2>

            <div className='box-container'>
                <div className='boxer box1'>
                    <img src={Oreo} />

                    <article>
                        <h3>Sorvete de Oreo</h3>

                        <p>Delocioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </article>
                </div>

                <div className='boxer box2'>
                    <img src={Pistache} />

                    <article>
                        <h3>Sorvete Pistache</h3>

                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </article>
                </div>

                <div className='boxer box3'>
                    <img src={Cookies} />

                    <article>
                        <h3>Sorvete Cookies & Avelã</h3>

                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </article>
                </div>

                <div className='boxer box4'>
                    <img src={Kiwi} />

                    <article>
                        <h3>Sorvete de Kiwi</h3>

                        <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
                    </article>
                </div>

                <div className='boxer box5'>
                    <img src={Morango} />

                    <article>
                        <h3>Sovete de Morango</h3>

                        <p>Sovete de Morango gourmet. Tradicional e saboroso.</p>
                    </article>
                </div>

                <div className='boxer box6'>
                    <img src={Limao} />

                    <article>
                        <h3>Sorvete de Limão Siciliano</h3>

                        <p>O incrivel sorvete gourmet de Limão Siciliano vai te encantar.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
)

export default SaboresMain;