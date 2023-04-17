import ServiceForm from "./service-form/ServiceForm";
import icon1 from "../../../assets/images/a1.svg";
import icon2 from "../../../assets/images/a2.svg";
import icon3 from "../../../assets/images/a3.svg";
import icon4 from "../../../assets/images/a4.svg";
import icon5 from "../../../assets/images/a5.svg";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { Link } from "react-scroll";
import {DetailedSliderModal} from "../../../components/modals/DetailedSliderModal";

export default function ServiceControl() {
  const [activeIndexes, setActiveIndexes] = useState([0]);
  const [openDetailedSlideModal, setOpenDetailedSlideModal] = useState(false);
  const controlOptions = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
  ];
  const getClassName = (index) => {
    if (activeIndexes.includes(index)) return "active";
    else return "inactive";
  };

  return (
      <>
        <div className="slide-wrapper service_control flex items-start" id="three">
          <Link activeClass="active" smooth spy offset={-150} to="three"></Link>
          <div className="content-side">
            <div className="image-wrapper flex column-direction">
              <figure>
                <div className="scale-image img_two"></div>
                <figcaption>
                  {controlOptions.map(({ icon }, index) => {
                    return (
                        <span
                            className={`${getClassName(
                                index
                            )} control-options services-list opo-${index + 1}`}
                            key={index}
                        >
                    <img src={icon} alt="icon" />
                  </span>
                    );
                  })}
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="sidebar-options">
            <ServiceForm
                activeIndexes={activeIndexes}
                setActiveIndexes={setActiveIndexes}
                openModal={() => {
                  setOpenDetailedSlideModal(!openDetailedSlideModal);
                }}
            />
          </div>
        </div>
        {
            openDetailedSlideModal === true &&
            <DetailedSliderModal
                modalExtraClass="detailed-modal-wrapper"
                button_text="Anruf anfordern"
                closeModal={() => {
                  setOpenDetailedSlideModal(!openDetailedSlideModal);
                }}
            />
        }
      </>
  );
}
