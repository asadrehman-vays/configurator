import progressIcon1 from "../../../assets/images/progressIcon1.svg";
import progressIcon2 from "../../../assets/images/progressIcon2.svg";
import progressIcon3 from "../../../assets/images/progressIcon3.svg";
import progressIcon4 from "../../../assets/images/progressIcon4.svg";
import progressIcon5 from "../../../assets/images/progressIcon5.svg";
import progressIcon6 from "../../../assets/images/progressIcon6.svg";
import progressIcon7 from "../../../assets/images/progressIcon7.svg";
import FunctionForm from "./functions-form/FunctionForm";
import icon1 from "../../../assets/images/1.svg";
import icon2 from "../../../assets/images/2.svg";
import icon3 from "../../../assets/images/3.svg";
import icon4 from "../../../assets/images/4.svg";
import icon5 from "../../../assets/images/5.svg";
import icon6 from "../../../assets/images/6.svg";
import icon7 from "../../../assets/images/7.svg";
import icon8 from "../../../assets/images/8.svg";
import icon9 from "../../../assets/images/9.svg";
import icon10 from "../../../assets/images/10.svg";
import icon11 from "../../../assets/images/11.svg";
import icon12 from "../../../assets/images/12.svg";
import icon13 from "../../../assets/images/13.svg";
import icon14 from "../../../assets/images/14.svg";
import icon15 from "../../../assets/images/11.1.svg";
import icon16 from "../../../assets/images/13.1.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-scroll";
import ProgressbarCount from "../../../components/ProgressbarCount";
import {FunktionenModal} from "../../../components/modals/funktionen-modal/FunktionenModal";

export default function FunctionsControl() {
  const [activeIndexes, setActiveIndexes] = useState([0]);
  const [openFunktionen, setOpenFunktionen] = useState(false);

  const controlOptions = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
    { icon: icon6 },
    { icon: icon7 },
    { icon: icon8 },
    { icon: icon9 },
    { icon: icon10 },
    { icon: icon11 },
    { icon: icon12 },
    { icon: icon13 },
    { icon: icon14 },
    { icon: icon15 },
    { icon: icon16 }
  ];
  const value = 0.36;
  const getClassName = (index) => {
    if (activeIndexes.includes(index)) return "active";
    else return "inactive";
  };

  return (
      <>
        <div className="slide-wrapper function_control flex items-start" id="two">
          <Link activeClass="active" smooth spy offset={-150} to="two"></Link>
          <div className="content-side">
            <div className="image-wrapper flex column-direction">
              <figure>
                <div className="scale-image img_one"></div>
                <figcaption>
                  {controlOptions.map(({ icon }, index) => {
                    return (
                        <span
                            className={`${getClassName(index)} control-options opo-${
                                index + 1
                            }`}
                            key={index}
                        >
                    <img src={icon} alt="icon" />
                  </span>
                    );
                  })}
                </figcaption>
              </figure>
              <div className="progressbar-group flex">
                <section className="without_subtitle">
                  <div className="titles flex items-center content-justify-between">
                    <h3>Ihre Ausstattung im Vergleich</h3>
                    <NavLink to="/">Mehr Info</NavLink>
                  </div>
                  <ul className="flex list-none">
                    <li>
                      <small>
                        <img src={progressIcon1} alt="progressIcon1" />
                        2/10
                      </small>
                      <CircularProgressbar
                          value={0.2}
                          maxValue={1}
                          text={`${value * 100}%`}
                      />
                      <span>Effizienz</span>
                    </li>
                    <li>
                      <small>
                        <img src={progressIcon2} alt="progressIcon2" />
                        10/10
                      </small>
                      <CircularProgressbar
                          value={1}
                          maxValue={1}
                          text={`${value * 100}%`}
                      />
                      <span>Komfort</span>
                    </li>
                    <li>
                      <small>
                        <img src={progressIcon3} alt="progressIcon3" />
                        5/10
                      </small>
                      <CircularProgressbar
                          value={0.5}
                          maxValue={1}
                          text={`${0.5 * 100}%`}
                      />
                      <span>Sicherheit</span>
                    </li>
                    <li>
                      <small>
                        <img src={progressIcon4} alt="progressIcon4" />
                        2/10
                      </small>
                      <CircularProgressbar
                          value={0.2}
                          maxValue={1}
                          text={`${value * 100}%`}
                      />
                      <span>Wertsteigerung</span>
                    </li>
                  </ul>
                </section>
                <section>
                  <div className="titles flex items-center content-justify-between">
                    <h3>Ihre Ersparnis</h3>
                    <NavLink to="/">Mehr Info</NavLink>
                  </div>
                  <ul className="flex list-none">
                    <li>
                      <small>
                        <img src={progressIcon5} alt="progressIcon5" />
                        -35%
                        <sub>bis zu</sub>
                      </small>
                      <CircularProgressbar
                          value={1}
                          maxValue={1}
                          text={`${value * 100}%`}
                      />
                      <span>Heizkosten</span>
                    </li>
                    <li>
                      <small>
                        <img src={progressIcon6} alt="progressIcon6" />
                        -50%
                        <sub>bis zu</sub>
                      </small>
                      <CircularProgressbar
                          value={1}
                          maxValue={1}
                          text={`${value * 100}%`}
                      />
                      <span>Stromkosten</span>
                    </li>
                    <li>
                      <small>
                        <img src={progressIcon7} alt="progressIcon7" />
                        -40%
                        <sub>bis zu</sub>
                      </small>
                      <CircularProgressbar
                          value={1}
                          maxValue={1}
                          text={`${value * 100}%`}
                      />
                      <span>CO<sub>2</sub>Emmisionen</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="sidebar-options">
            <FunctionForm
                activeIndexes={activeIndexes}
                setActiveIndexes={setActiveIndexes}
                openModal={() => {
                  setOpenFunktionen(!openFunktionen);
                }}
            />
          </div>
          <ProgressbarCount />
        </div>
        {
            openFunktionen === true &&
            <FunktionenModal
                modalExtraClass="funktionen-modal-wrapper"
                modalTitle="Smart Home Funktionalitäten"
                button_text="Mehr Vorteile von Smart Home"
                closeModal={() => {
                  setOpenFunktionen(!openFunktionen);
                }}
            />
        }
      </>
  );
}
