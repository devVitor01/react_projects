import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import SobreBanner from "./sobre_banner";
import SobreMain from "./sobre_main";

const SobrePage = () =>(
    <section>
        <Header />
        <SobreBanner />
        <SobreMain />
        <Footer />
    </section>
)

export default SobrePage;