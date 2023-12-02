import React from 'react'
import '../index.css';
import { specialistData } from './specialistsData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Specialists = () => {
  return (
    <div className='my-[100px]'>
        <h2 className='ml-[84px] font-poppins font-semibold text-5xl'>Our Specialists</h2>
        <div className='flex mx-auto justify-around mt-[70px]'>
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
          }
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
            {specialistData.map((specialist) => {
                return (
                    <SwiperSlide className='border border-[#41CBE2] shadow-lg rounded-xl bg-[#ecfafc] p-3 text-center font-light' key={specialist.id}>
                        <img className='mx-auto mb-5' src={specialist.img} alt={specialist.name} />
                        <p>{specialist.name}</p>
                        <p className='font-medium uppercase text-lg'>{specialist.specialty}</p>
                        <p>{specialist.email}</p>
                        <p>${specialist.rate}</p>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    </div>
  )
}

export default Specialists