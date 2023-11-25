import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Home.css';

// import required modules
import { Pagination } from 'swiper/modules';
export const Testimonials = () => {
  return (
    
    <div className="container">
    <h3 className='testimonials mt-5 text-center'>Testimonials</h3>
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    autoplay={{ delay: 3000 }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
    >

    <SwiperSlide> 
     
    <img src="https://www.pnytrainings.com/assets/uploads/testimonial/testimonial-1648634603-pny.jpg" alt="Avatar" style={{width:"120px"}}/>
    <p className='pny'><sup><i class="fa-solid fa-quote-left"></i></sup> Trainings, one of the best and recognized IT Training Institute in Pakistan provides world-class IT training programs and certifications.</p>
    
    <p className='ali'>Muhammad Ali - CDMM Student</p><div className='mt-3'></div>
    
    </SwiperSlide>

    <SwiperSlide>
   <img src="https://www.pnytrainings.com/assets/uploads/testimonial/testimonial-1530871619-pny.jpg" alt="Avatar" style={{width:"120px"}}/>
    <p className='pny'><sup><i class="fa-solid fa-quote-left"></i></sup>I did iOS app development course from PNY trainings. It was a wonderful experience. I learned enough to kick off my professional career in iOS development.</p>
    <p className='ali'>Fatima Waheed - IOS Student</p>
    </SwiperSlide><div className='mt-3'></div>
    
  <SwiperSlide>  
  <img src="https://www.pnytrainings.com/assets/uploads/testimonial/testimonial-1530871473-pny.jpg" alt="Avatar" style={{width:"120px"}}/>
    <p className='pny'><sup><i class="fa-solid fa-quote-left"></i></sup>A great training institute for learning different courses from scratch level and becoming a pro. I had the experience of doing SEO Course from PNY Trainings Instructor is a very professional and Great Communication skill.</p>
    <p className='ali'>Fahad Mehmood - SEO Student</p>
    </SwiperSlide><div className='mt-3'></div>
  
  </Swiper>
  </div>
  )
}
