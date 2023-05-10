import React from "react";
import './style.css';

import Header from "../../components/header";
import Footer from "../../components/footer";
import SaboresBanner from "./sabores_banner";
import SaboresMain from "./sabores_main";

const SaboresPage = () =>(
    <section className="sabores-page">
        <Header />
        <SaboresBanner />
        <SaboresMain />
        <Footer />
    </section>
)

export default SaboresPage;