import {Link, NavLink} from "react-router-dom";
import trustpilotScreeShot from "../../../../assets/images/screenshot.png"
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