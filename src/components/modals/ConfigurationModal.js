import "./modals.scss";
import crossIcon from "../../assets/images/close.svg";
import TextInput from "./TextInput";
import {Link} from "react-router-dom";

export const ConfigurationModal = (props) => {
  return (
    <div className={`modal-wrapper ${props.modalExtraClass}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-head">
            <h2>{props.modalTitle}</h2>
            <img src={crossIcon} alt="crossIcon" className="crossIcon" onClick={props.closeModal}/>
          </div>
          <div className="modal-body">
            <div className="modal-forms">
              {props.modalDescription}
              <ul className="list-none">
                <li>
                  <TextInput label="Vorname" type="text"/>
                </li>
                <li>
                  <TextInput label="Nachname" type="text"/>
                </li>
                <li>
                  <TextInput label="E-Mail" type="email"/>
                </li>
                <li>
                  <TextInput label="Handynummer" type="tel"/>
                </li>
                <li>{props.bottomLineIntro}</li>
              </ul>
              <div className="flex content-justify-center">
                <button className="submit-button cancel">{props.button_text}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
