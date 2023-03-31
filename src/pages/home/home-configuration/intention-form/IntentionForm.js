export default function IntentionForm() {
  const intentionSelection = [
    "Heizkosten sparen",
    "Stromkosten sparen",
    "Wohnkomfort steigern",
    "Mehr Sicherheit",
    "Wertsteigerung der Immobilie",
    "Barrierefreiheit im Alter",
  ];
  return (
    <>
      <h2 className="sidebar-title">Intention</h2>
      <aside className="side-widgets intention-wrapper">
        <ul className="list-none flex column-direction intention_list">
          <li>
            <label htmlFor="">Was möchten Sie erreichen?</label>
          </li>
          {intentionSelection.map((label, index) => {
            return (
              <li key={`check-${index}`}>
                <label htmlFor={`check-${index}`} className="check-box">
                  <input type="checkbox" id={`check-${index}`} />
                  <span>{label}</span>
                </label>
              </li>
            );
          })}
          <li className="content-justify-center items-center">
            <button className="simple-btn">Details zur Intention</button>
          </li>
        </ul>
      </aside>
    </>
  );
}
