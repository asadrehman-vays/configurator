export default function ProgressbarCount() {
    return(
        <div className="progressbar-counter">
            <ul className="list-none flex">
                <li>
                    <section>
                        <h5>Ihre Ausstattung im Vergleich</h5>
                        <ul className="list-none flex flex-wrap">
                            <li><h6>Effizienz</h6> <span className="ml-auto"><span className="slider"><small style={{width: "10%"}}></small></span>2/10</span></li>
                            <li><h6>Sicherheit</h6> <span className="ml-auto"><span className="slider"><small style={{width: "50%"}}></small></span>5/10</span></li>
                            <li><h6>Komfort</h6> <span className="ml-auto"><span className="slider"><small style={{width: "100%"}}></small></span>10/10</span></li>
                            <li><h6>Wertsteigerung</h6> <span className="ml-auto"><span className="slider"><small style={{width: "10%"}}></small></span>2/10</span></li>
                        </ul>
                    </section>
                </li>
                <li>
                    <section>
                        <h5>Ihre Ersparnis</h5>
                        <ul className="list-none flex flex-wrap">
                            <li><h6>Heizkosten</h6> <span className="ml-auto"><span className="slider"><small style={{width: "10%"}}></small></span>2/10</span></li>
                            <li><h6>CO<sub>2</sub> Emmisionen</h6> <span className="ml-auto"><span className="slider"><small style={{width: "50%"}}></small></span>5/10</span></li>
                            <li><h6>Stromverbrauch</h6> <span className="ml-auto"><span className="slider"><small style={{width: "100%"}}></small></span>10/10</span></li>
                        </ul>
                    </section>
                </li>
            </ul>
        </div>
    )
}