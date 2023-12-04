
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {


    const slides = [
        { image: 'https://shelterhousingltd.com/wp-content/uploads/2019/10/1.jpg', title: 'Slide 1' },
        { image: 'https://shelterhousingltd.com/wp-content/uploads/2019/10/4.jpg', title: 'Slide 2' },
        { image: 'https://shelterhousingltd.com/wp-content/uploads/2019/10/2.jpg', title: 'Slide 3' },

      ];
    return (
        <Swiper className=''
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides={true}

        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    
      >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
            
          <img src={slide.image} alt={slide.title}/>

     
        </SwiperSlide>
      ))}
    </Swiper>
    );
};

export default Banner;

