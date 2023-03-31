import "./modals.scss";
import crossIcon from "../../assets/images/close.svg";

export const ConfigurationModal = (props) => {
  return (
    <div className={`modal-wrapper`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-head">
              <h2>{props.modalTitle}</h2>
              <img src={crossIcon} alt="crossIcon" />
            </div>
            <div className="modal-forms">
              {props.modalDescription}

              <div className="flex content-justify-center">
                <button className="submit-button cancel">Speichern</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
