import { useState } from "react";
import Select from "react-dropdown-select";

export default function ConfigurationForm() {
  const [installationsortValues, setInstallationsortValues] = useState([
    {
      value: 1,
      label: "Haus",
    },
  ]);
  const [bauvorhabenValues, setBauvorhabenValues] = useState([
    {
      value: 1,
      label: "Nachrüstung",
    },
  ]);
  const [bauphaseValues, setBauphaseValues] = useState([
    {
      value: 1,
      label: "Bezugsfertig",
    },
  ]);
  const [raume, setRaume] = useState([
    {
      value: 4,
      label: "4 Räume",
    },
  ]);

  const installationsortOptions = [
    {
      value: 1,
      label: "Haus",
    },
    {
      value: 2,
      label: "Wohnung",
    },
    {
      value: 3,
      label: "Gewerbe",
    },
    {
      value: 4,
      label: "Sonstiges",
    },
  ];

  const bauvorhabenOptions = [
    {
      value: 1,
      label: "Nachrüstung",
    },
    {
      value: 2,
      label: "Renovierung",
    },
    {
      value: 3,
      label: "Sanierung",
    },
    {
      value: 4,
      label: "Neubau",
    },
  ];

  const bauphaseOptions = [
    {
      value: 1,
      label: "Bezugsfertig",
    },
    {
      value: 2,
      label: "Innenausbau",
    },
    {
      value: 3,
      label: "Rohbau",
    },
    {
      value: 4,
      label: "Planung",
    },
  ];

  const raumeOptions = [
    {
      value: 1,
      label: "1 Räume",
    },
    {
      value: 2,
      label: "2 Räume",
    },
    {
      value: 3,
      label: "3 Räume",
    },
    {
      value: 4,
      label: "4 Räume",
    },
    {
      value: 5,
      label: "5 Räume",
    },
    {
      value: 6,
      label: "6 Räume",
    },
    {
      value: 7,
      label: "7 Räume",
    },
    {
      value: 8,
      label: "8 Räume",
    },
    {
      value: 9,
      label: "9 Räume",
    },
    {
      value: 10,
      label: "10 Räume",
    },
    {
      value: 11,
      label: "11 Räume",
    },
    {
      value: 12,
      label: "12 Räume",
    },
    {
      value: 13,
      label: "13 Räume",
    },
    {
      value: 14,
      label: "14 Räume",
    },
    {
      value: 15,
      label: "15 Räume",
    },
    {
      value: 16,
      label: "16 Räume",
    },
    {
      value: 17,
      label: "17 Räume",
    },
    {
      value: 18,
      label: "18 Räume",
    },
    {
      value: 19,
      label: "19 Räume",
    },
    {
      value: 20,
      label: "20 Räume",
    },
    {
      value: 21,
      label: "21 Räume",
    },
    {
      value: 22,
      label: "22 Räume",
    },
    {
      value: 23,
      label: "23 Räume",
    },
    {
      value: 24,
      label: "24 Räume",
    },
    {
      value: 25,
      label: "25 Räume",
    },
    {
      value: 26,
      label: "26 Räume",
    },
    {
      value: 27,
      label: "27 Räume",
    },
    {
      value: 28,
      label: "28 Räume",
    },
    {
      value: 29,
      label: "29 Räume",
    },
    {
      value: 30,
      label: "30 Räume",
    },
  ];
  return (
    <>
      <h1 className="sidebar-title">Ihre Smart Home Konfiguration</h1>
      <aside className="side-widgets">
        <ul className="list-none flex column-direction">
          <li>
            <label htmlFor="">Installationsort</label>
            <Select
              options={installationsortOptions}
              onChange={(value) => {
                setInstallationsortValues(value);
              }}
              values={installationsortValues}
            />
          </li>
          <li>
            <label htmlFor="">Bauvorhaben</label>
            <Select
              options={bauvorhabenOptions}
              onChange={(value) => {
                setBauvorhabenValues(value);
              }}
              values={bauvorhabenValues}
            />
          </li>
          <li>
            <label htmlFor="">Bauphase</label>
            <Select
              options={bauphaseOptions}
              onChange={(value) => {
                setBauphaseValues(value);
              }}
              values={bauphaseValues}
            />
          </li>
          <li>
            <label htmlFor="">
              Räume <small>(inkl. Flur und Bäder)</small>
            </label>
            <Select
              options={raumeOptions}
              onChange={(value) => {
                setRaume(value);
              }}
              values={raume}
            />
          </li>
        </ul>
      </aside>
    </>
  );
}
