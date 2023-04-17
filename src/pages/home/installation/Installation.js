import installationImage from "../../../assets/images/installation-bg.jpg";
import InstallationProcess from "./installation-process/InstallationProcess";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-scroll";
import {DetailedModal} from "../../../components/modals/DetailedModal";
import installationsideImage from "../../../assets/images/installationsideImage.png";
import {useState} from "react";
import {AutomatisierungSliderModal} from "../../../components/modals/AutomatisierungSliderModal";
import {SystemIntegratedModal} from "../../../components/modals/system-integrated-modal/SystemIntegratedModal";
import fordermitImage from "../../../assets/images/fordermit.jpg";
import WartungsserviceListData from "../../../components/modals/WartungsserviceListData.json";
import wartungsserviceImage from "../../../assets/images/wartungsservice.png";
import gewahrleistungImage from "../../../assets/images/gewahrleistung.png";
import garantienImage from "../../../assets/images/garantien.png";

export default function Installation() {
    const [openDetailedInstallationModal, setOpenDetailedInstallationModal] = useState(false);
    const [openAutomatisierungModal, setOpenAutomatisierungModal] = useState(false);
    const [openSystemIntegrated, setOpenSystemIntegrated] = useState(false);
    const [openFordermittelModal, setOpenFordermittelModal] = useState(false);
    const [openDetailedWithListModal, setOpenDetailedWithListModal] = useState(false);
    const [openGewahrleistungModal, setOpenGewahrleistungModal] = useState(false);
    const [openGarantienModal, setOpenGarantienModal] = useState(false);

    return(
        <>
            <div className="slide-wrapper installation_control control_options flex items-start" id="four">
                <Link activeClass="active" smooth spy offset={-150} to="four"></Link>
                <div className="content-side">
                    <div className="image-wrapper flex column-direction">
                        <figure>
                            <img src={installationImage} alt="installationImage"/>
                        </figure>
                    </div>
                </div>
                <div className="sidebar-options">
                    <InstallationProcess
                        openModal={() => {
                            setOpenDetailedInstallationModal(!openDetailedInstallationModal);
                        }}
                        automatisierungModal={() => {
                            setOpenAutomatisierungModal(!openAutomatisierungModal);
                        }}
                        integrationenModal={() => {
                            setOpenSystemIntegrated(!openSystemIntegrated);
                        }}
                        fordermittelModal={() => {
                            setOpenFordermittelModal(!openFordermittelModal);
                        }}
                        wartungsserviceModal={() => {
                            setOpenDetailedWithListModal(!openDetailedWithListModal);
                        }}
                        gewahrleistungModal={() => {
                            setOpenGewahrleistungModal(!openGewahrleistungModal);
                        }}
                        garantienModal={() => {
                            setOpenGarantienModal(!openGarantienModal);
                        }}
                    />
                </div>
            </div>
            {
                openDetailedInstallationModal === true &&
                <DetailedModal
                    modalExtraClass="detailed-modal-wrapper"
                    subtitle={false}
                    title={[<h2>Installation</h2>]}
                    modalDescription={[
                        <p>Die professionelle Montage, Installation, Programmierung und Einweisung wird von einem regionalen Team an zertifizierten Smart Home Elektroinstallateuren bei Ihnen vor Ort ausgeführt.</p>,
                        <p>Nach Beauftragung prüft Ihr persönlicher Elektromeister und Projektleiter mit Ihnen die Konfiguration. Anschließend werden die bauseitigen Gegebenheiten vor Ort vor Beginn der Arbeiten nochmals intensiv geprüft.</p>,
                        <p>Weiterführende Hinweise zur Installation, sowie zu den nächsten Schritten können Sie im Bereich Häufige Fragen einsehen.</p>
                    ]}
                    button_text="Anruf anfordern"
                    button_area={false}
                    modalSideImage={installationsideImage}
                    closeModal={() => {
                        setOpenDetailedInstallationModal(!openDetailedInstallationModal);
                    }}
                />
            }

            {
                openAutomatisierungModal === true &&
                <AutomatisierungSliderModal
                    modalExtraClass="automatisierung-modal-wrapper"
                    closeModal={() => {
                        setOpenAutomatisierungModal(!openAutomatisierungModal);
                    }}
                />
            }

            {
                openSystemIntegrated === true &&
                <SystemIntegratedModal
                    modalExtraClass="system-integrated-wrapper"
                    modalTitle="Wählen Sie bestehenden Systeme"
                    button_text="Auswählen"
                    closeModal={() => {
                        setOpenSystemIntegrated(!openSystemIntegrated);
                    }}
                />
            }

            {
                openFordermittelModal === true &&
                <DetailedModal
                    modalExtraClass="detailed-modal-wrapper"
                    subtitle={false}
                    title={[<h2>Fördermittel</h2>]}
                    modalDescription={[
                        <p>Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) und die Kreditanstalt für Wiederaufbau (KfW) bezuschussen Ihre Smart Home Investition mit 15% Förderung. Unsere Fördermittelexperten beraten Sie gerne, unterstützen Sie bei der Beantragung und übernehmen die gesamte Kommunikation mit der Förderstelle.</p>,
                        <p>Die Förderung gilt nur für Bestandsgebäude (älter als 10 Jahre) und bedingt die Installation durch einen Fachbetrieb. Es werden pro Wohneinheit jährlich nur max. 60.000€ Fördervolumen bereitgestellt.</p>,
                    ]}
                    button_text="Anruf anfordern"
                    button_area={false}
                    modalSideImage={fordermitImage}
                    closeModal={() => {
                        setOpenFordermittelModal(!openFordermittelModal);
                    }}
                />
            }
            {
                openDetailedWithListModal === true &&
                <DetailedModal
                    modalExtraClass="detailed-modal-wrapper"
                    subtitle={false}
                    title={[<h2>Wartungsservice</h2>]}
                    beforeListTitle={[<small>Ihr Rundum-Sorglos-Service.</small>]}
                    WartungsserviceList={true}
                    WartungsserviceListData={WartungsserviceListData}
                    button_text="Anruf anfordern"
                    button_area={false}
                    modalSideImage={wartungsserviceImage}
                    closeModal={() => {
                        setOpenDetailedWithListModal(!openDetailedWithListModal);
                    }}
                />
            }
            {
                openGewahrleistungModal === true &&
                <DetailedModal
                    modalExtraClass="detailed-modal-wrapper"
                    subtitle={false}
                    title={[<h2>Gewährleistung</h2>]}
                    modalDescription={[
                        <p>Üblicherweise erhalten Sie von den Smart Home Herstellern selbst lediglich die gesetzliche Hersteller-Gewährleistung für 2 Jahre.</p>,
                        <p>Darüber hinaus können Sie Ihre Gewährleistung mit uns auf 3 Jahre oder 5 Jahre, sowie mit dem Wartungsservice sogar auf unbegrenzte Zeit verlängern. </p>,
                    ]}
                    button_text="Anruf anfordern"
                    button_area={false}
                    modalSideImage={gewahrleistungImage}
                    closeModal={() => {
                        setOpenGewahrleistungModal(!openGewahrleistungModal);
                    }}
                />
            }
            {
                openGarantienModal === true &&
                <DetailedModal
                    modalExtraClass="detailed-modal-wrapper"
                    subtitle={false}
                    title={[<h2>Garantien</h2>]}
                    modalDescription={[
                        <p>Wir sind stolz darauf, Ihnen die besten Garantien am Markt aussprechen zu können.</p>,
                        <p>Diese können wir Ihnen aussprechen, da wir in unseren Smart Home Konfigurationen ausschließlich sorgfältig aufeinander abgestimmte Komponenten von geprüften Smart Home Herstellern verwenden und unsere Systeme zudem ausschließlich von zertifizierten Experten verbaut werden.</p>,
                    ]}
                    button_text="Anruf anfordern"
                    button_area={false}
                    modalSideImage={garantienImage}
                    closeModal={() => {
                        setOpenGarantienModal(!openGarantienModal);
                    }}
                />
            }
        </>
    )
}