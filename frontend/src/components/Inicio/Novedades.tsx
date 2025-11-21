import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "./Novedades.css";
import "swiper/css/pagination";

function Novedades() {
  return (
    <div className="novedades-container">
      <h1 className="novedades-titulo">Mirá lo que tenemos para vos</h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={3}
        slidesPerView={1}
        className="novedades-slider"
      >
        <SwiperSlide>
          <img src="/images/hab1.jpg" alt="Habitación 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/hab2.jpg" alt="Habitación 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/hab3.jpg" alt="Habitación 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Novedades;
