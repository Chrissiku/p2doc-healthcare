/* eslint-disable react/prop-types */
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import avatar from "/assets/avatar.svg";
import { useContext } from "react";
import { Web5Context } from "../utils/Web5Context";

const Specialists = ({ specialistData }) => {
  const { loadingDoctor } = useContext(Web5Context);

  if (specialistData.length === 0) {
    const randomMessages = [
      "No specialists available at the moment.",
      "Check back later for updated specialist information.",
      "We're sorry, no specialists found for your search.",
    ];
    const randomMessage =
      randomMessages[Math.floor(Math.random() * randomMessages.length)];

    return (
      <div className="mx-auto w-full text-center text-[30px] bg-red-200 text-black py-20">
        <p>{loadingDoctor ? <>Loading . . .</> : randomMessage}</p>{" "}
      </div>
    );
  }
  // console.log(specialistData);
  return (
    <div className="my-[100px]">
      <h2 className="ml-[84px] font-poppins font-semibold text-5xl">
        Our Specialists
      </h2>
      <div className="flex mx-auto justify-around mt-[70px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {specialistData.map((specialist, index) => {
            return (
              <SwiperSlide
                className="border border-[#41CBE2] shadow-lg rounded-xl bg-[#ecfafc] p-3 text-center font-light"
                key={index}
              >
                <img
                  className="mx-auto mb-5"
                  src={avatar}
                  alt={specialist.name}
                />
                <p>{specialist.name}</p>
                <p className="font-medium uppercase text-lg">
                  {specialist.speciality}
                </p>
                <p>
                  {specialist.experience <= 1
                    ? `${specialist.experience} year of experience`
                    : `${specialist.experience} years of experience`}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Specialists;
