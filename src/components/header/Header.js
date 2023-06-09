import "./header.scss";
import logo from "../../assets/images/favicon.png"
// import mob_logo from "../../assets/images/mobile-logo.svg"
import close from "../../assets/images/close.svg"
import user from "../../assets/images/user.png"
import questionIcon from "../../assets/images/quistion.svg"
import contactIcon from "../../assets/images/contactIcon.svg"
import phoneIcon from "../../assets/images/phone.svg"
import chatIcon from "../../assets/images/chat.svg"
import calendarIcon from "../../assets/images/calendar.svg"
import downArrow from "../../assets/images/down-arrow.svg"
import {Link} from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import {useEffect, useState} from "react";
import {FaqModal} from "../modals/FaqModal";

export default function Header() {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [openFaqModal, setOpenFaqModal] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    const dropDownOpenFun = () => {
        setIsOpenDropDown(!isOpenDropDown)
    }
    return(
        <>
            <header id="main_header" className={`${isOpenDropDown ? "layer_show" : ""} ${scroll ? "active" : ""}`}>
                <div className="container">
                    <div className="header-wrapper flex content-justify-between items-center">
                        <Link to="/">
                            VAYS
                            <img src={logo} alt="logo"/>
                        </Link>
                        <ul className={`flex list-none right-section ${isOpenDropDown ? "active_drop" : ""}`}>
                            <li>
                                <button
                                    className="transparent-button flex items-center"
                                    onClick={() => {
                                        setOpenFaqModal(
                                            true
                                        );
                                    }}
                                >
                                    <img src={questionIcon} alt="questionIcon"/>
                                    <span>Häufig gestellte Fragen</span>
                                </button>
                            </li>
                            <li onClick={()=>dropDownOpenFun()} className={`dropdown-open ${isOpenDropDown ? "active" : ""}`}>
                                <OutsideClickHandler
                                    onOutsideClick={() => {
                                        setIsOpenDropDown(false);
                                    }}
                                >
                                    <img src={close} alt="close" className="header-close"/>
                                    <img src={contactIcon} alt="contactIcon"/>
                                    <section>
                                        <span>Hilfe und Kontakt</span>
                                        <small>0800 9116 398</small>
                                    </section>
                                    <img className="select-arrow" src={downArrow} alt="downArrow"/>
                                    <div className="dropdown-wrap">
                                        <figure className="flex user-profile items-center">
                                            <img src={user} alt="user"/>
                                            <figcaption>
                                                <strong>Joshua Starke</strong>
                                                <p>Ihr Smart Home Experte</p>
                                            </figcaption>
                                        </figure>
                                        <Link to="tel:08009116398">
                                            <img src={phoneIcon} alt="phoneIcon"/>
                                            <section>
                                                <span>0800 9116 398</span>
                                                <small>Mo. - Fr. von 8:00 - 18:00 Uhr </small>
                                            </section>
                                        </Link>
                                        <Link to="mailto:info@gmail.com">
                                            <img src={chatIcon} alt="chatIcon"/>
                                            <section>
                                                <span>Digitaler Chat-Assistent</span>
                                                <small>24/7 für Sie verfügbar</small>
                                            </section>
                                        </Link>
                                        <Link to="#">
                                            <img src={calendarIcon} alt="calendarIcon"/>
                                            <section>
                                                <span>Expertenberatung</span>
                                                <small>Persönliches Beratungsgespräch</small>
                                            </section>
                                        </Link>
                                    </div>
                                </OutsideClickHandler>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
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
    )
}