import {Link} from "react-router-dom";
import trustpilotScreeShot from "../../../../assets/images/trustpilotScreeShot.svg"
import download from "../../../../assets/images/download.svg"
import pay from "../../../../assets/images/pay.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function SmartSidebar(props) {
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
                        <li>Module <span>Beleuchtung <br/>Heizung <br/> Beschattung</span></li>
                        <li>Steuerung <span>App <br/>Touchscreen</span></li>
                        <li>Komponenten <span>für 6 Räume</span></li>
                        <li>Montage <span>Inklusive</span></li>
                        <li>Parametrierung <span>Inklusive</span></li>
                        <li>Programmierung  <span>Inklusive</span></li>
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
                    <button className="submit-button">Zur Kasse</button>
                    <button onClick={props.openModal} className="submit-button transparent">Bestellung prüfen lassen</button>
                    <button onClick={props.faqOpenModal} className="transparent-button link">Häufig gestellte Fragen</button>
                </div>
                <figure className="">
                    <img src={pay} alt="pay"/>
                </figure>
            </aside>
            <h2 className="sidebar-title">Bewertungen</h2>
            <aside className="side-widgets trustpilot">
                <img src={trustpilotScreeShot} alt="trustpilotScreeShot"/>
                <div className="trustpilot-list">
                    <h6>96% von 97 Bewertungen empfehlen uns.</h6>
                    <ul className="list-none">
                        <ul className="list-none">
                            <li>
                                Zuverlässigkeit
                                <div className="progressbar-points">
                                <span className="base">
                                    <span className="base-bar" style={{width: "95%"}}></span>
                                    <span className="base-points"></span>
                                </span>
                                    4.8
                                </div>
                            </li>
                            <li>
                                Servicegrad
                                <div className="progressbar-points">
                                <span className="base">
                                    <span className="base-bar" style={{width: "90%"}}></span>
                                    <span className="base-points"></span>
                                </span>
                                    4.7
                                </div>
                            </li>
                            <li>
                                Funktionalität
                                <div className="progressbar-points">
                                <span className="base">
                                    <span className="base-bar" style={{width: "90%"}}></span>
                                    <span className="base-points"></span>
                                </span>
                                    4.7
                                </div>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="side-swiper-slide">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="frame-image">
                                <iframe width="400" height="185" src="https://www.youtube.com/embed/SeXQ8vnlXQc"
                                        title="Erfahrungsbericht über VAYS von Tim Kroll" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="frame-image">
                                <iframe width="400" height="185" src="https://www.youtube.com/embed/SeXQ8vnlXQc"
                                        title="Erfahrungsbericht über VAYS von Tim Kroll" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </aside>
        </>
    )
}