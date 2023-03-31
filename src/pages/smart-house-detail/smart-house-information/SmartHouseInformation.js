import sliderImage1 from "../../../assets/images/slider-img1.jpg";
import sliderImage2 from "../../../assets/images/slider-img2.jpg";
import sliderImage3 from "../../../assets/images/slider-img3.jpg";
import sliderImage4 from "../../../assets/images/slider-img4.jpg";
import SmartSidebar from "./smart-sidebar/SmartSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import ProgressbarCount from "../../../components/ProgressbarCount";

export default function SmartHouseInformation() {
  const sliderImageList = [
    { slideImage: sliderImage1 },
    { slideImage: sliderImage2 },
    { slideImage: sliderImage3 },
    { slideImage: sliderImage4 },
  ];
  return (
    <div className="slide-wrapper smart_house smart_house_detail flex items-start">
      <Link to="#" className="active"></Link>
      <div className="content-side">
        <div className="image-wrapper flex column-direction">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {sliderImageList.map(({ slideImage }, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={slideImage} alt="sliderImage1" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ProgressbarCount />
        </div>
      </div>
      <div className="sidebar-options">
        <SmartSidebar />
      </div>
    </div>
  );
}
