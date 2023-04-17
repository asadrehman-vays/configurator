import SmartHouseInformation from "./smart-house-information/SmartHouseInformation";
import {useEffect} from "react";
import FooterTwo from "../../components/footer/FooterTwo";

export default function SmartHouseDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="main-wrapper flex column-direction">
      <div className="container">
        <SmartHouseInformation />
        <FooterTwo/>
      </div>
    </div>
  );
}
