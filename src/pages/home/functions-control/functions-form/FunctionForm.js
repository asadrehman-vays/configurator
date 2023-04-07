import {useState} from "react";

export default function FunctionForm({ activeIndexes, setActiveIndexes }) {
  const [data, setData] = useState({
    languages: []
  });
  const [checkList, setCheckList] = useState(false)
  const showCheckList = () => {
    setCheckList(!checkList);
  }

  const functionSelection = [
    { label: "Heizung", included: "gewählt" },
    { label: "Beschattung", included: "+ 1.232,00€" },
    { label: "Beleuchtung", included: "+ 1.232,00€" },
    { label: "Energie", included: "+ 1.232,00€" },
    { label: "Steckdosen", included: "+ 1.232,00€" },
    { label: "Bewegungsmelder", included: "+ 1.232,00€" },
    { label: "Alarmsystem", included: "+ 1.532,00€" },
    { label: "Kameras", included: "+ 1.532,00€" },
    { label: "Rauchmelder", included: "+ 1.532,00€" },
    { label: "Türstation", included: "+ 4.578,20€" },
    { label: "Zugang", included: "+ 4.578,20€" },
    { label: "Sound", included: "+ 4.578,20€" },
    { label: "Garten", included: "+ 1.232,00€" },
    { label: "Lüftung", included: "+ 1.232,00€" }
  ];

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = data;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setData({
        languages: [...languages, value]
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setData({
        languages: languages.filter((e) => e !== value)
      });
    }
  };

  return (
    <>
      <h2 className="sidebar-title">Funktionen</h2>
      <aside className="side-widgets intention-wrapper">
        <ul className="list-none flex column-direction intention-wrap">
          <li onClick={()=>showCheckList()} className={`mobile_list ${checkList === true ? 'show_list':''}`}>
            {data.languages?.map((data)=>{
              return(<span className="info-tag">{data},</span>)
            })}
            <i className="fa fa-angle-down"></i>
          </li>
          {functionSelection.map(({ label, included }, index) => {
            return (
              <li key={`control-check-${index}`}>
                <label
                  htmlFor={`control-check-${index}`}
                  className={`check-box`}
                  onChange={handleChange}
                >
                  <input
                    type="checkbox"
                    value={label}
                    name="languages"
                    id={`control-check-${index}`}
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
          <li>
            <label
                htmlFor={`control-check-x`}
                className={`check-box`}
            >
              <input
                  type="checkbox"
                  name="languages"
                  id={`control-check-x`}
              />
              <span>
                    Sonstiges <strong>auf Anfrage</strong>
                  </span>
            </label>
          </li>
        </ul>
        <div className="flex content-justify-center items-center">
          <button className="simple-btn">Funktionen vergleichen</button>
        </div>
      </aside>
    </>
  );
}
