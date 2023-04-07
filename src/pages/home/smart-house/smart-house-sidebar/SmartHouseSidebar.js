import {Link} from "react-router-dom";
import trustpilotScreeShot from "../../../../assets/images/trustpilotScreeShot.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function SmartHouseSidebar() {
    return(
        <>
            <h2 className="sidebar-title">Ihre Smart Home Konfiguration</h2>
            <aside className="side-widgets smart-house">
                <section>
                    <h6>Vorreservierte Installationstermine</h6>
                    <span>5.5.23   |   12.5.23  |  19.5.23</span>
                    <h6>Installationsdauer</h6>
                    <span>ca. 8 Tage</span>
                    <Link to="/smart-house" className="submit-button">In den Warenkorb</Link>
                    <button className="submit-button transparent">Persönliche Fachberatung</button>
                    <Link to="/" className="link">Häufig gestellte Fragen</Link>
                </section>
            </aside>
            <h2 className="sidebar-title">Bewertungen</h2>
            <aside className="side-widgets trustpilot">
                <img src={trustpilotScreeShot} alt="trustpilotScreeShot"/>
                <div className="trustpilot-list">
                    <h6>96% von 97 Bewertungen empfehlen uns.</h6>
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