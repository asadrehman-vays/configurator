import SmartHouseInformation from "./smart-house-information/SmartHouseInformation";
import {useEffect} from "react";

export default function SmartHouseDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="main-wrapper flex column-direction">
      <div className="container">
        <SmartHouseInformation />
      </div>
    </div>
  );
}
