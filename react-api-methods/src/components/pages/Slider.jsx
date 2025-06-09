import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../index.css';

// Import images (you can import manually or use dynamic import if needed)
import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';
import img4 from '../../assets/images/4.jpeg';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

const Slider = () => {
  return (
    <div className="w-full p-0 relative">
      <Swiper
        className="centered-slide-carousel"
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        breakpoints={{
          1920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="bg-indigo-50  h-96 flex justify-center items-center overflow-hidden">
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
