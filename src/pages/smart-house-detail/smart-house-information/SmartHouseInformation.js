import sliderImage1 from "../../../assets/images/slider-img1.jpg";
import sliderImage2 from "../../../assets/images/slider-img2.jpg";
import sliderImage3 from "../../../assets/images/slider-img3.jpg";
import sliderImage4 from "../../../assets/images/slider-img4.jpg";
import SmartSidebar from "./smart-sidebar/SmartSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import ProgressbarCount from "../../../components/ProgressbarCount";
import {ConfigurationModal} from "../../../components/modals/ConfigurationModal";
import {useState} from "react";
import {FaqModal} from "../../../components/modals/FaqModal";

export default function SmartHouseInformation() {
    const [openExpertAdviceModal, setOpenExpertAdviceModal] = useState(false);
    const [openFaqModal, setOpenFaqModal] = useState(false);
  const sliderImageList = [
    { slideImage: sliderImage1 },
    { slideImage: sliderImage2 },
    { slideImage: sliderImage3 },
    { slideImage: sliderImage4 },
  ];
  return (
    <>
        <div className="slide-wrapper smart_house smart_house_detail flex items-start">
            <Link to="#" className="active"></Link>
            <div className="content-side">
                <div className="image-wrapper flex column-direction">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {sliderImageList.map(({ slideImage }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={slideImage} alt="sliderImage1" />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <ProgressbarCount />
                </div>
            </div>
            <div className="sidebar-options">
                <SmartSidebar
                    openModal={() => {
                        setOpenExpertAdviceModal(!openExpertAdviceModal);
                    }}
                    faqOpenModal={() => {
                        setOpenFaqModal(!openFaqModal);
                    }}
                />
            </div>
        </div>
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
            openFaqModal === true &&
            <FaqModal
                modalExtraClass="faq-wrapper"
                modalTitle="Häufige Fragen"
                closeModal={() => {
                    setOpenFaqModal(!openFaqModal);
                }}
            />
        }

    </>
  );
}
