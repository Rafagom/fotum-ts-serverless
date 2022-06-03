// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import homeImg1 from "../../public/home-img1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Welcome() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col z-[2] gap-4 absolute items-center text-center text-[#00324b] mx-4 px-2 bg-[rgb(245,245,245,0.7)] py-4  rounded-md sm:px-8 sm:py-6    md:px-10 md:py-8">
        <h1 className="flex text-5xl font-bold">
          Seja <br className="sm:hidden" /> bem-vindo!
        </h1>
        <p className="max-w-[40ch] font-semibold md:text-2xl">
          Temos as melhores soluções em sistemas de geração solar fotovoltaica.
        </p>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        className="mySwiper "
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Image src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={homeImg1} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
