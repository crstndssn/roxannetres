"use client";

import React, { useEffect, useState } from "react";
import { store } from "../../firebase";
import Link from "next/link";

import "../../../style/app.scss";

import Card from "../Card";

// import sulky from "@/public/songs/sulky.mp3";
import centro__lamaquina from "@/public/songs/centro.mp3";
import norte_lj from "@/public/songs/norte.mp3";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
// Si necesitas otros módulos (como Navigation, Pagination, etc.), importa también su CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import ViewModeButtons from "@/src/components/Imagenes/ViewModeButtons";
import DynamicDetails from "@/src/components/Imagenes/DynamicDetails";

const Genesis = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list"); // 'grid' or 'list'

  // COLORS
  const handleClickGenesis = () => {
    setColors({
      primary: "#bd1616",
      secondary: "#000",
    });
  };

  // MUSIC
  const handleClickSur = () => {
    setCurrentSong({
      title: "Sulky",
      url: '/songs/sulky.mp3',
    });
  };

  const handleClickCentro = () => {
    setCurrentSong({
      title: "Centro",
      url: '/songs/centro.mp3',
    });
    setIsOpen(isOpen);
  };

  const handleClickNorte = () => {
    setCurrentSong({
      title: "Norte",
      url: '/songs/norte.mp3',
    });
  };

  return (
    <details open
      onClick={handleClickGenesis}
    >
      <summary className="bg-genesis cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-5xl text-black">génesis</h2>
      </summary>
      <DynamicDetails
        title="sur"
        handleClick={handleClickSur}
        className="w-full alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2017genesis"
        folderName="sur"
      />
      <DynamicDetails
        title="centro"
        handleClick={handleClickCentro}
        className="w-full alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2017genesis"
        folderName="centro"
      />
      <DynamicDetails
        title="norte"
        handleClick={handleClickNorte}
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2017genesis"
        folderName="norte"
      />
    </details>
  );
};

export default Genesis;
