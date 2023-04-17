import "./home.scss";
import HomeConfiguration from "./home-configuration/HomeConfiguration";
import FunctionsControl from "./functions-control/FunctionsControl";
import ServiceControl from "./service-control/ServiceControl";
import Installation from "./installation/Installation";
import SmartHouse from "./smart-house/SmartHouse";
import {useEffect} from "react";
import FooterOne from "../../components/footer/FooterOne";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <div className="main-wrapper flex column-direction" id="one">
                <div className="container">
                    <HomeConfiguration/>
                    <FunctionsControl/>
                    <ServiceControl/>
                    <Installation/>
                    <SmartHouse/>
                    <FooterOne/>
                </div>
            </div>
        </>
    )
}