import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import listIcon1 from "../../../../assets/images/icon1.svg";
import listIcon2 from "../../../../assets/images/icon2.svg";
import listIcon3 from "../../../../assets/images/icon3.svg";

export default function InstallationProcess() {
  const [installationsserviceValues, setInstallationsserviceValues] = useState(
    []
  );
  const [startDate, setStartDate] = useState(new Date());

  const priceIncludedList = [
    "Montage vom zertifizierten Elektriker",
    "Parametrierung und Einrichtung",
    "Programmierung vom Systemexperten",
    "Professionelle Inbetriebnahme",
    "Einweisung in das System",
    "Service & Betreuung vom Elektromeister",
  ];
  const wartungList = [
    "Exklusive Systembetreuung ",
    "Fernwartung bei Störfällen",
    "Fehlerbehebung vor Ort",
    "Übernahme Reperaturkosten",
    "Jährlicher System-Health-Check",
    "Austausch defekter Geräte",
    "Versicherungsschutz",
    "Unbegrenzte Gewährleistung",
  ];
  const installationsserviceOptions = [
    {
      value: 1,
      label: [
        <p>
          Installation <small className="ml-auto">Inklusive</small>
        </p>,
      ],
    },
    {
      value: 2,
      label: "Keine Installation",
    },
  ];

  const heimautomatisierungOptions = [
    {
      value: 1,
      label: [
        <p>
          3 Automatisierungen <small className="ml-auto">Inklusive</small>
        </p>,
      ],
    },
    {
      value: 2,
      label: "5 Automatisierungen",
    },
    {
      value: 3,
      label: "Unbegrenzt Automatisierungen",
    },
  ];

  const vorhandenerOptions = [
    {
      value: 1,
      label: [
        <p>
          {" "}
          Keine Integration<small className="ml-auto">Inklusive</small>
        </p>,
      ],
    },
    {
      value: 2,
      label: "3 Integrationen",
    },
    {
      value: 3,
      label: "Unbegrenzt Integrationen",
    },
  ];

  const fördermittelserviceOptions = [
    {
      value: 1,
      label: [
        <p>
          15% Förderung<small className="ml-auto">Inklusive</small>
        </p>,
      ],
    },
    {
      value: 2,
      label: "Keine Förderung",
    },
  ];

  const WartungsserviceOptions = [
    {
      value: 1,
      label: [
        <p>
          0 Jahre<small className="ml-auto">Inklusive</small>
        </p>,
      ],
    },
    {
      value: 2,
      label: "1 Jahr",
    },
    {
      value: 3,
      label: "3 Jahre",
    },
    {
      value: 5,
      label: "5 Jahre",
    },
  ];

  const GewährleistungOptions = [
    {
      value: 1,
      label: [
        <p>
          2 Jahre<small className="ml-auto">Inklusive</small>
        </p>,
      ],
    },
    {
      value: 3,
      label: "3 Jahre",
    },
    {
      value: 5,
      label: "5 Jahre",
    },
  ];

  const garantienList = [
    {
      listIcon: listIcon1,
      title: "Festpreisgarantie",
      description:
        "Sie kennen alle Kosten von Anfang an. Keine versteckten Kosten.",
    },
    {
      listIcon: listIcon2,
      title: "Best-Leistungsgarantie",
      description:
        "Kostenfreie Stornierung, wenn Sie am Markt bessere Leistung finden.",
    },
    {
      listIcon: listIcon3,
      title: "30 Tage “Geld zurück”",
      description:
        "Sind Sie nicht zufrieden, erhalten Sie bedingungslos Ihr Geld zurück.",
    },
  ];

  return (
    <>
      <h2 className="sidebar-title">Installation</h2>
      <aside className="side-widgets installation-wrapper">
        <ul className="list-none flex column-direction installation_list">
          <li>
            <label htmlFor="">Im Preis inbegriffen</label>
            <ul className="list-none flex column-direction list-style-one">
              {priceIncludedList.map((list, index) => {
                return <li key={`list-${index}`}>{list}</li>;
              })}
            </ul>
          </li>
          <li>
            <label htmlFor="">Installationsservice</label>
            <Select
              options={installationsserviceOptions}
              onChange={(value) => {
                setInstallationsserviceValues(value);
              }}
            />
          </li>
          <li className="content-justify-center items-center">
            <button className="simple-btn">Details zur Bedienung</button>
          </li>
        </ul>
        <ul className="list-none flex column-direction">
          <li>
            <label htmlFor="">Installation Wunschtermin</label>
            {/*<Select options={installationsserviceOptions} />*/}
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </li>
          <li>
            <label htmlFor="">Heimautomatisierung</label>
            <Select
              options={heimautomatisierungOptions}
              defaultValue={heimautomatisierungOptions[1]}
              value={heimautomatisierungOptions.value}
            />
          </li>
          <li className="content-justify-center items-center w-100">
            <button className="simple-btn">Beispiele Automatisierung</button>
          </li>
          <li>
            <label htmlFor="">Integration vorhandener Systeme</label>
            <Select
              options={vorhandenerOptions}
              defaultValue={vorhandenerOptions[1]}
              value={vorhandenerOptions.value}
            />
          </li>
          <li className="content-justify-center items-center">
            <button className="simple-btn">Integrationen wählen</button>
          </li>
        </ul>
      </aside>
      <h2 className="sidebar-title">Fördermittel</h2>
      <aside className="side-widgets installation-wrapper">
        <ul className="list-none flex column-direction">
          <li>
            <label htmlFor="">Fördermittelservice</label>
            <Select
              options={fördermittelserviceOptions}
              defaultValue={fördermittelserviceOptions[1]}
              value={fördermittelserviceOptions.value}
            />
          </li>
          <li className="content-justify-center items-center">
            <button className="simple-btn">Details zur Bedienung</button>
          </li>
        </ul>
      </aside>
      <h2 className="sidebar-title">Wartung</h2>
      <aside className="side-widgets installation-wrapper">
        <ul className="list-none flex column-direction installation_list">
          <li>
            <label htmlFor="">Im Wartungsservice enthalten</label>
            <ul className="list-none flex column-direction list-style-one">
              {wartungList.map((list, index) => {
                return <li key={`list-${index}`}>{list}</li>;
              })}
            </ul>
          </li>
          <li>
            <label htmlFor="">Laufzeit Wartungsservice</label>
            <Select
              options={WartungsserviceOptions}
              defaultValue={WartungsserviceOptions[1]}
              value={WartungsserviceOptions.value}
            />
          </li>
          <li className="content-justify-center items-center">
            <button className="simple-btn">Details zum Wartungsservice</button>
          </li>
        </ul>
      </aside>
      <h2 className="sidebar-title">Gewährleistung</h2>
      <aside className="side-widgets installation-wrapper">
        <ul className="list-none flex column-direction">
          <li>
            <label htmlFor="">Laufzeit Gewährleistung</label>
            <Select
              options={GewährleistungOptions}
              defaultValue={GewährleistungOptions[1]}
              value={GewährleistungOptions.value}
            />
          </li>
          <li className="content-justify-center items-center">
            <button className="simple-btn">Details zur Gewährleistung</button>
          </li>
        </ul>
      </aside>
      <h2 className="sidebar-title">Garantien</h2>
      <aside className="text-list-one">
        <ul className="list-none flex column-direction">
          {garantienList.map(({ title, listIcon, description }, index) => {
            return (
              <li key={`lis-${index}`} className="flex items-start">
                <figure>
                  <img src={listIcon} alt="listIcon" />
                </figure>
                <section>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </section>
              </li>
            );
          })}
          <li className="flex content-justify-center items-center">
            <button className="simple-btn">Details zu Garantien</button>
          </li>
        </ul>
      </aside>
    </>
  );
}
