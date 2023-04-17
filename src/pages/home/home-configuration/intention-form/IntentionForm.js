import {useState} from "react";

export default function IntentionForm(props) {
  const [checked, setChecked] = useState([]);
  const [checkList, setCheckList] = useState(false);

  const showCheckList = () => {
    setCheckList(!checkList);
  }
  const intentionSelection = [
    "Heizkosten sparen",
    "Stromkosten sparen",
    "Wohnkomfort steigern",
    "Mehr Sicherheit",
    "Wertsteigerung der Immobilie",
    "Barrierefreiheit im Alter",
  ];
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
      ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
      : "";

  return (
    <>
      <h2 className="sidebar-title">Intention</h2>
      <aside className="side-widgets intention-wrapper">
        <ul className="list-none flex column-direction intention_list">
          <li onClick={()=>showCheckList()} className={`mobile_list ${checkList === true ? 'show_list':''}`}>
            <span className="info-tag">{checkedItems}</span>
            <i className="fa fa-angle-down"></i>
          </li>
          <li className="lab">
            <label htmlFor="">Was möchten Sie erreichen?</label>
          </li>
          {intentionSelection.map((label, index) => {
            return (
              <li key={`check-${index}`}>
                <label htmlFor={`check-${index}`} className="check-box">
                  <input
                      type="checkbox"
                      id={`check-${index}`}
                      onChange={handleCheck}
                      value={label}
                  />
                  <span>{label}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <div className="content-justify-center flex items-center">
          <button
              className="simple-btn"
              onClick={props.openModal}
          >Details zu den Vorteilen</button>
        </div>
      </aside>
    </>
  );
}
