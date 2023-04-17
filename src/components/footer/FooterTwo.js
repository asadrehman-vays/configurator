import {Link} from "react-router-dom";
import FooterPrice from "./FooterPrice";
import {ConfigurationModal} from "../modals/ConfigurationModal";
import {useState} from "react";

export default function FooterTwo() {
    const [openExpertAdviceModal, setOpenExpertAdviceModal] = useState(false);
    return(
        <>
            <footer id="footer">
                <div className="container flex items-center">
                    <FooterPrice/>
                    <div className="button-wrapper ml-auto">
                        <button
                            className="submit-button transparent"
                            onClick={() => {
                                setOpenExpertAdviceModal(
                                    true
                                );
                            }}
                        >
                            Bestellung prüfen lassen
                        </button>
                        <Link to="/smart-house" className="submit-button">
                            Zur Kasse
                        </Link>
                    </div>
                </div>
            </footer>
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
        </>
    )
}