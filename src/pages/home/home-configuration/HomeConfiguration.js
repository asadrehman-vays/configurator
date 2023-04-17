import imageSlideOne from "../../../assets/images/homeimg1.jpg";
import ConfigurationForm from "./configuration-form/ConfigurationForm";
import IntentionForm from "./intention-form/IntentionForm";
import ZentraleForm from "./zentrale-form/ZentraleForm";
import { Link } from "react-scroll";
import {IntentionModal} from "../../../components/modals/intention-modal/IntentionModal";
import {useState} from "react";
import {SystemeModal} from "../../../components/modals/tab-systeme-modal/SystemeModal";

export default function HomeConfiguration() {
    const [openIntention, setOpenIntention] = useState(false);
    const [openTabSystemeModal, setOpenTabSystemeModal] = useState(false);

  return (
    <>
        <div className="slide-wrapper home_confirmation flex items-start">
            <Link activeClass="active" smooth spy offset={-150} to="one"></Link>
            <div className="content-side">
                <div className="image-wrapper flex column-direction">
                    <figure>
                        <img src={imageSlideOne} alt="imageSlideOne" />
                    </figure>
                </div>
            </div>
            <div className="sidebar-options">
                <ConfigurationForm />
                <IntentionForm
                    openModal={() => {
                        setOpenIntention(!openIntention);
                    }}
                />
                <ZentraleForm
                    openModal={() => {
                        setOpenTabSystemeModal(!openTabSystemeModal);
                    }}
                />
            </div>
        </div>
        {
            openIntention === true &&
            <IntentionModal
                modalExtraClass="intention-modal-wrapper"
                modalTitle="Die Vorteile von Smart Home"
                button_text="Mehr Vorteile von Smart Home"
                closeModal={() => {
                    setOpenIntention(!openIntention);
                }}
            />
        }
        {
            openTabSystemeModal === true &&
            <SystemeModal
                modalExtraClass="tab-systeme-modal-wrapper"
                modalTitle="Systeme vergleichen"
                closeModal={() => {
                    setOpenTabSystemeModal(!openTabSystemeModal);
                }}
            />
        }
    </>
  );
}
