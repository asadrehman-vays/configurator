import installationImage from "../../../assets/images/installation-bg.jpg";
import InstallationProcess from "./installation-process/InstallationProcess";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-scroll";

export default function Installation() {

    return(
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
                <InstallationProcess/>
            </div>
        </div>
    )
}