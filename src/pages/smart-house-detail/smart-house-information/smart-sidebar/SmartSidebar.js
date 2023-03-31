import {Link} from "react-router-dom";
import trustpilotScreeShot from "../../../../assets/images/screenshot.png"
import download from "../../../../assets/images/download.svg"
import pay from "../../../../assets/images/pay.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function SmartSidebar() {
    return(
        <>
            <button className="collapse-btn"><i className="fa fa-angle-up"></i> Konfiguration ändern</button>
            <h2 className="sidebar-title">Ihre Smart Home Konfiguration</h2>
            <aside className="side-widgets smart-house">
                <section>
                    <Link className="pdf-down" to="/">PDF herunterladen <img src={download} alt="download"/></Link>
                    <h6>Vorreservierte Installationstermine</h6>
                    <span>5.5.23   |   12.5.23  |  19.5.23</span>
                    <h6>Installationsdauer <span>ca. 8 Tage</span></h6>
                    <ul className="scroll-list flex column-direction list-none">
                        <li>Module <span>Beleuchtung <br/>Heizung </span></li>
                        <li>Steuerung <span>App <br/>Touchscreen</span></li>
                        <li>Montage <span>Inklusive</span></li>
                        <li>Parametrierung <span>Inklusive</span></li>
                        <li>Programmierung <span>Inklusive</span></li>
                        <li>Inbetriebnahme <span>Inklusive</span></li>
                        <li>Einweisung <span>Inklusive</span></li>
                        <li>Integrationen <span>2</span></li>
                        <li>Automatisierungen <span>3</span></li>
                        <li>Fördermittelservice <span>Inklusive</span></li>
                        <li>Wartungsservice <span>1 lahr</span></li>
                        <li>Inbetriebnahme <span>Inklusive</span></li>
                        <li>Einweisung <span>Inklusive</span></li>
                        <li>Integrationen <span>2</span></li>
                        <li>Automatisierungen <span>3</span></li>
                        <li>Fördermittelservice <span>Inklusive</span></li>
                        <li>Wartungsservice <span>1 lahr</span></li>
                    </ul>
                </section>
                <div className="button-box flex column-direction items-center content-justify-center">
                    <h4>Gesamtpreis <span>999,00€ <small>inkl. MwSt</small></span></h4>
                    <button className="submit-button">In den Warenkorb</button>
                    <button className="submit-button transparent">Persönliche Fachberatung</button>
                    <Link to="/">Häufig gestellte Fragen</Link>
                </div>
                <figure className="">
                    <img src={pay} alt="pay"/>
                </figure>
            </aside>
            <h2 className="sidebar-title">Bewertungen</h2>
            <aside className="side-widgets trustpilot">
                <img src={trustpilotScreeShot} alt="trustpilotScreeShot"/>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"></iframe>
                    </SwiperSlide>
                </Swiper>
            </aside>
        </>
    )
}