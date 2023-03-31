import { useState } from "react";
import Select from "react-dropdown-select";

export default function ZentraleForm() {
  const [zentraleValues, setZentraleValues] = useState([
    {
      value: 1,
      label: "Bosch",
    },
  ]);
  const options = [
    {
      value: 1,
      label: "Bosch",
    },
    {
      value: 2,
      label: "homematic",
    },
    {
      value: 3,
      label: "FIBARO",
    },
    {
      value: 4,
      label: "homey",
    },
  ];
  return (
    <>
      <h2 className="sidebar-title">Zentrale</h2>
      <aside className="side-widgets">
        <ul className="list-none flex column-direction">
          <li>
            <label htmlFor="">Hersteller</label>
            <Select
              options={options}
              onChange={(value) => {
                setZentraleValues(value);
              }}
              values={zentraleValues}
            />
          </li>
          <li className="content-justify-center items-center">
            <button className="simple-btn">Systeme vergleichen</button>
          </li>
        </ul>
      </aside>
    </>
  );
}
