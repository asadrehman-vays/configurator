export default function ServiceForm({ activeIndexes, setActiveIndexes }) {
  const functionSelection = [
    { label: "App", included: "inklusive" },
    { label: "Sprachsteuerung", included: "+ 1.239,50€" },
    { label: "Fernbedienung", included: "+ 1.232,00€" },
    { label: "Szenenschalter", included: "+ 1.232,00€" },
    { label: "Bedienpanel", included: "+ 1.232,00€" },
  ];

  return (
    <>
      <h2 className="sidebar-title">Bedienung</h2>
      <aside className="side-widgets intention-wrapper">
        <ul className="list-none flex column-direction">
          {functionSelection.map(({ label, included }, index) => {
            return (
              <li key={`service-check-${index}`}>
                <label
                  htmlFor={`service-check-${index}`}
                  className={`check-box`}
                >
                  <input
                    type="checkbox"
                    id={`service-check-${index}`}
                    onChange={(e) => {
                      if (e.target.checked) {
                        let _active = [...activeIndexes];
                        _active.push(index);
                        setActiveIndexes(_active);
                      } else {
                        let _active = [...activeIndexes].filter(
                          (e) => e !== index
                        );
                        setActiveIndexes(_active);
                      }
                    }}
                  />
                  <span>
                    {label} <strong>{included}</strong>
                  </span>
                </label>
              </li>
            );
          })}
          <li className="content-justify-center items-center">
            <button className="simple-btn">Details zur Bedienung</button>
          </li>
        </ul>
      </aside>
    </>
  );
}
