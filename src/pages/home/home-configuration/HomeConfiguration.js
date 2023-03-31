import imageSlideOne from "../../../assets/images/homeimg1.jpg";
import ConfigurationForm from "./configuration-form/ConfigurationForm";
import IntentionForm from "./intention-form/IntentionForm";
import ZentraleForm from "./zentrale-form/ZentraleForm";
import { Link } from "react-scroll";

export default function HomeConfiguration() {
  return (
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
        <IntentionForm />
        <ZentraleForm />
      </div>
    </div>
  );
}
