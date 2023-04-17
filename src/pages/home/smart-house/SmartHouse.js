import sliderImage1 from "../../../assets/images/slider-img1.jpg"
import sliderImage2 from "../../../assets/images/slider-img2.jpg"
import sliderImage3 from "../../../assets/images/slider-img3.jpg"
import sliderImage4 from "../../../assets/images/slider-img4.jpg"
import SmartHouseSidebar from "./smart-house-sidebar/SmartHouseSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-scroll";
import ProgressbarCount from "../../../components/ProgressbarCount";
import {FaqModal} from "../../../components/modals/FaqModal";
import {useState} from "react";
import {ConfigurationModal} from "../../../components/modals/ConfigurationModal";

export default function SmartHouse() {
    const [openFaqModal, setOpenFaqModal] = useState(false);
    const [openExpertAdviceModal, setOpenExpertAdviceModal] = useState(false);
    const [openConfigurationModal, setOpenConfigurationModal] = useState(false);
    const sliderImageList = [
        {slideImage: sliderImage1},
        {slideImage: sliderImage2},
        {slideImage: sliderImage3},
        {slideImage: sliderImage4}
    ]
    return(
        <>
            <div className="slide-wrapper smart_house flex items-start" id="five">
                <Link activeClass="active" smooth spy offset={-150} to="five"></Link>
                <div className="content-side">
                    <div className="image-wrapper flex column-direction">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {
                                sliderImageList.map(({slideImage},index)=>{
                                    return <SwiperSlide key={index}><img src={slideImage} alt="sliderImage1"/></SwiperSlide>
                                })
                            }
                        </Swiper>
                        <ProgressbarCount/>
                    </div>
                </div>
                <div className="sidebar-options">
                    <SmartHouseSidebar
                        openModal={() => {
                            setOpenFaqModal(!openFaqModal);
                        }}
                        expertAdviceModal={() => {
                            setOpenExpertAdviceModal(!openExpertAdviceModal);
                        }}
                        warenkorbModal={() => {
                            setOpenConfigurationModal(!openConfigurationModal);
                        }}
                    />
                </div>
            </div>
            {
                openFaqModal === true &&
                <FaqModal
                    modalExtraClass="faq-wrapper"
                    modalTitle="Häufige Fragen"
                    closeModal={() => {
                        setOpenFaqModal(!openFaqModal);
                    }}
                />
            }
            {
                openExpertAdviceModal === true &&
                <ConfigurationModal
                    modalTitle="Kostenlose Fachberatung "
                    button_text="Anruf anfordern"
                    modalDescription={[<p>Ihr persönlicher Smart Home Experte meldet sich schnellstmöglich bei Ihnen.</p>]}
                    bottomLineIntro={[<p>Indem Sie auf “Konfiguration prüfen lassen” klicken, akzeptieren Sie unsere <Link to="/">Datenschutzbedingungen</Link>.</p>]}
                    closeModal={() => {
                        setOpenExpertAdviceModal(!openExpertAdviceModal);
                    }}
                />
            }
            {
                openConfigurationModal === true &&
                <ConfigurationModal
                    modalTitle="Konfiguration speichern"
                    button_text="Speichern"
                    bottomLineIntro={[<p>Indem Sie auf “Speichern” klicken, akzeptieren Sie unsere <Link to="/">Datenschutzbedingungen</Link>.</p>]}
                    closeModal={() => {
                        setOpenConfigurationModal(!openConfigurationModal);
                    }}
                />
            }
        </>
    )
}