import Navbar from "../Fragments/Navbar";
import Hero from "../Fragments/Hero";

import { heroData } from "../../constants/pagesData";
const HomeLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Hero
                tittle = {heroData.tittle}
                text= {heroData.text}
                stats={heroData.stats}
                img={heroData.img}
            />
        </div>
    )
}

export default HomeLayout;