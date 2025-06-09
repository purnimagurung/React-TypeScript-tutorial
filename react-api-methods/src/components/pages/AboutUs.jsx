import 'swiper/css';
import 'swiper/css/pagination';
import '../../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const AboutUs = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                About Me
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Hi, I’m a frontend developer with over 5 years of experience crafting responsive, user-friendly, and scalable web applications...
              </p>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">Resume</span>
            </button>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 1200, disableOnInteraction: false }}
            pagination={{ type: 'progressbar' }}
            className="progress-slide-carousel"
          >
            <SwiperSlide>
              <img
                className="lg:mx-0 mx-auto h-full object-cover"
                src="https://pagedone.io/asset/uploads/1717751272.png"
                alt="about us"
              />
            </SwiperSlide>
            {/* Add more <SwiperSlide> if needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
