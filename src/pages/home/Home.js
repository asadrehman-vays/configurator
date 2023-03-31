import "./home.scss";
import HomeConfiguration from "./home-configuration/HomeConfiguration";
import FunctionsControl from "./functions-control/FunctionsControl";
import ServiceControl from "./service-control/ServiceControl";
import Installation from "./installation/Installation";
import SmartHouse from "./smart-house/SmartHouse";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="main-wrapper flex column-direction" id="one">
            <div className="container">
                <HomeConfiguration/>
                <FunctionsControl/>
                <ServiceControl/>
                <Installation/>
                <SmartHouse/>
            </div>
        </div>
    )
}