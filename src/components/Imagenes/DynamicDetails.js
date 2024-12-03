import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ViewModeButtons from "./ViewModeButtons";
import Card from "@/src/app/alterocio/Card";

const DynamicDetails = ({ 
  title, 
  handleClick, 
  className, 
  viewMode, 
  setViewMode, 
  data 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Ajusta el tiempo según el delay que experimentes
  };

  return (
    <details
      onClick={(e) => {
        handleClick(e);
        handleToggle();
      }}
      className={className}
    >
      <summary className="alterocio__card--header">{title}</summary>
      <ViewModeButtons setViewMode={setViewMode} />
      <div
        className={`${className}--grid h-full overflow-y-auto p-2`}
      >
        {isLoading && (
          <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-16 h-16 text-white animate-spin"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="75"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="75"
                  to="360"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        )}
        {!isLoading &&
          (viewMode === "grid" ? (
            <Swiper
              slidesPerView="auto"
              centeredSlides
              spaceBetween={0}
              pagination={{ clickable: true }}
              freeMode
              className="mySwiper"
              style={{ height: "100%" }}
            >
              {data.length !== 0 ? (
                data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Card
                      images={item.imageLinks}
                      title={item.title}
                      category={item.category}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </Swiper>
          ) : (
            <div className="listView columns-3 gap-4 pb-[100px]">
              {data.length !== 0 ? (
                data.map((item) => (
                  <div key={item.id} className="listView__item break-inside-avoid mb-2 bg-gray-200 p-2">
                    <Card
                      images={item.imageLinks}
                      title={item.title}
                      category={item.category}
                    />
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          ))}
      </div>
    </details>
  );
};

export default DynamicDetails;
