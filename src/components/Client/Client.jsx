import "./Client.css";
import down from "../../assets/down.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import robert from "../../assets/artur-round.png"
import { Pagination, Scrollbar } from "swiper";
const Client = () => {
  const onAutoplayTimeLeft = (s, time, progress) => {};
  return (
    <div className="container_client">
      <div className="client">
        <h1>What Clients Say</h1>
      </div>
      <div className="p_client">
        <p>1500+ Satisfied Clients</p>
      </div>
      <Swiper
      pagination={{
        clickable:true
      }}
        scrollbar={{
          hide: true,
        }}
        modules={[Pagination]}
        className="belek"
      >
        <SwiperSlide>
          <div className="img_client">
            <img src={down} alt="" />
          </div>
          <div className="alice">
            <h1>Alice Williams</h1>
          </div>
          <div className="citchen">
            <p>Kitchen Manager</p>
          </div>
          <div className="success">
            <p>
              Success isn’t really that difficult. There is a significant
              portion of the <br /> population here in North America, that
              actually want and need success 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_client">
            <img src={down} alt="" />
          </div>
          <div className="alice">
            <h1>Alice Williams</h1>
          </div>
          <div className="citchen">
            <p>Kitchen Manager</p>
          </div>
          <div className="success">
            <p>
              Success isn’t really that difficult. There is a significant
              portion of the <br /> population here in North America, that
              actually want and need success 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_client">
            <img src={down} alt="" />
          </div>
          <div className="alice">
            <h1>Alice Williams</h1>
          </div>
          <div className="citchen">
            <p>Kitchen Manager</p>
          </div>
          <div className="success">
            <p>
              Success isn’t really that difficult. There is a significant
              portion of the <br /> population here in North America, that
              actually want and need success 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="img_client">
            <img src={robert} alt="" />
          </div>
          <div className="alice">
            <h1>Artur</h1>
          </div>
          <div className="citchen">
            <p>the person who checks my assignment</p>
          </div>
          <div className="success">
            <p>
            As for me, the layout is shit, but for the first time it will do
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Client;
