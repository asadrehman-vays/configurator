import download from "../../../assets/images/download-black.svg"
import m1 from "../../../assets/images/m1.jpg"
import m2 from "../../../assets/images/m2.jpg"
import m3 from "../../../assets/images/m3.jpg"
import m4 from "../../../assets/images/m4.jpg"

import {Link} from "react-router-dom";

export default function Vergleich() {
    const tabOneDataList = [
        {
            "icon": m1,
            "subtitle": "Modernste Technologie",
            "title": "Bosch",
            "description": "Der namenhafte Hersteller Bosch setzt mit der neuesten Generation auf den neuen innovativen Verbindungs-standard Matter und hochwertige Komponenten.",
            "listTitle": "Verbindungsstandards",
            "listData": [
                "Matter",
                "ZigBee"
            ],
            "urlTitle": "Dokumente",
            "linkList": [
                {
                    "linkTitle": "Bosch_Broschüre.pdf",
                    "linkUrl": "#"
                },
                {
                    "linkTitle": "Bosch_Zentrale.pdf",
                    "linkUrl": "#"
                }
            ]
        },
        {
            "icon": m2,
            "subtitle": "Der Marktführer",
            "title": "homematic ",
            "description": "Mit homematic setzen Sie auf den Marktführer aus Deutschland mit hochwertiger, sicherer und vollkommen aufeinander abgestimmter Technik für die gängigsten Smart Home Bereiche. ",
            "listTitle": "Verbindungsstandards",
            "listData": [
                "homematic IP",
                "homematic Wired"
            ],
            "urlTitle": "Dokumente",
            "linkList": [
                {
                    "linkTitle": "homematic_Broschüre.pdf",
                    "linkUrl": "#"
                },
                {
                    "linkTitle": "homematic_Zentrale.pdf",
                    "linkUrl": "#"
                }
            ]
        },
        {
            "icon": m3,
            "subtitle": "Für umfangreiche Projekte",
            "title": "FIBARO",
            "description": "Das Home Center 3 von FIBARO überzeugt vor allem bei umfangreichen Projekten und großen Installation durch Tiefe der Funktionalität und Möglichkeiten der individuellen Programmierung.",
            "listTitle": "Verbindungsstandards",
            "listData": [
                "Z-Wave Plus",
                "ZigBee"
            ],
            "urlTitle": "Dokumente",
            "linkList": [
                {
                    "linkTitle": "FIBARO_Broschüre.pdf",
                    "linkUrl": "#"
                },
                {
                    "linkTitle": "FIBARO_Zentrale.pdf",
                    "linkUrl": "#"
                }
            ]
        },
        {
            "icon": m4,
            "subtitle": "Grenzenlose Integrationen",
            "title": "homey",
            "description": "Wenn für Sie vor allem die Kompatibilität zu Drittsystemen und eine Vielfalt an Integrationen und Schnittstellen wichtig ist, sind Sie bei Homey genau richtig. ",
            "listTitle": "Verbindungsstandards",
            "listData": [
                "Z-Wave Plus",
                "ZigBee",
                "Wifi",
                "Bluetooth",
                "Infrared",
                "433 MHz",
                "868 MHz"
            ],
            "urlTitle": "Dokumente",
            "linkList": [
                {
                    "linkTitle": "homey_Broschüre.pdf",
                    "linkUrl": "#"
                },
                {
                    "linkTitle": "homey_Zentrale.pdf",
                    "linkUrl": "#"
                }
            ]
        }
    ]

    return(
        <>
            <div className="table-responsive">
                <table>
                    <tr>
                        {
                            tabOneDataList.map(({icon,subtitle,title,description},index)=>{
                                return(
                                    <td key={`top-1-${index}`}>
                                        <figure>
                                            <img src={icon} alt="icon"/>
                                        </figure>
                                        <span>{subtitle}</span>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                    </td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        {
                            tabOneDataList.map(({listTitle, listData},index)=>{
                                return(
                                    <td key={`top-2-${index}`}>
                                        <h6>{listTitle}</h6>
                                        <ul>
                                            {
                                                listData.map((listData,index)=>{
                                                    return <li key={`data-${index}`}>{listData}</li>
                                                })
                                            }
                                        </ul>
                                    </td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        {
                            tabOneDataList.map(({urlTitle,linkList},index)=>{
                                return(
                                    <td key={`top-3-${index}`}>
                                        <h6>{urlTitle}</h6>
                                        {
                                            linkList.map(({linkTitle,linkUrl},index)=>{
                                                return <Link key={`link-${index}`} to={linkUrl}>{linkTitle} <img src={download} alt={download}/></Link>
                                            })
                                        }
                                    </td>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>
        </>
    )
}