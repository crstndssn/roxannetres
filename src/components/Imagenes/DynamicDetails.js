import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ViewModeButtons from "./ViewModeButtons";
import Card from "@/src/app/alterocio/Card";

import { Navigation } from 'swiper/modules';

const DynamicDetails = ({
  title,
  handleClick,
  className,
  viewMode,
  setViewMode,
  basePath,
  folderName,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      if (!basePath || !folderName) return;

      try {
        setIsLoading(true);

        // Llamar a la API para obtener los archivos
        const folderPath = `${basePath}/${folderName}`;
        const response = await fetch(`/api/load-images?folderPath=${folderPath}`);
        const images = await response.json();

        if (response.ok) {
          // Crear rutas completas para las imágenes
          const loadedImages = images.map((fileName, index) => ({
            id: index,
            imageLinks: [`/${folderPath}/${fileName}`],
            title: `${folderName.charAt(0).toUpperCase() + folderName.slice(1)} Image ${index + 1
              }`,
            category: folderName.charAt(0).toUpperCase() + folderName.slice(1),
          }));

          setData(loadedImages);
        } else {
          console.error("Error fetching images:", images.error);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [basePath, folderName]);

  return (
    <details
      onClick={(e) => {
        handleClick(e);
      }}
      className="w-full alterocio__card--momento"
    >
      <summary className="alterocio__card--header border-b-2 border-black dark:border-white  cursor-pointer mb-3 pl-3 md:pl-0 text-left md:text-center text-black dark:text-white  marker:content-none text-2xl md:text-4xl py-3 alter-font">{title}</summary>
      <ViewModeButtons setViewMode={setViewMode} />
      <div className={`${className}--grid h-full overflow-y-auto mt-20 p-2`}>
        {isLoading ? (
          <div>Loading...</div>
        ) : viewMode === "grid" ? (
          <Swiper
            slidesPerView="auto"
            centeredSlides
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={true} modules={[Navigation]} // Activa los botones de navegación
            freeMode
            className="mySwiper"
            style={{ height: "100%" }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        ) : (
          <div className="listView pt-5 md:pt-14 columns-1 md:columns-2  gap-4 pb-[100px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="listView__item break-inside-avoid mb-2 bg-gray-200 md:p-2"
              >
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </details>
  );
};

export default DynamicDetails;
