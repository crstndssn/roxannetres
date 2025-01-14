"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
// Si necesitas otros módulos (como Navigation, Pagination, etc.), importa también su CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ViewModeButtons from '@/src/components/Imagenes/ViewModeButtons';
import DynamicDetails from '@/src/components/Imagenes/DynamicDetails';

const Mercurio = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list"); // 'grid' or 'list'

  // COLORS
  const handleClickMercurio = () => {
    setColors({
      primary: "#8E4FD1",
      secondary: "#000",
    });
  };

  // MUSIC
  const handleClickMorir = () => {
    setCurrentSong({
      title: 'antes de morir',
      url: '/songs/alterocio/antes_de_morir.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickLuces = () => {
    setCurrentSong({
      title: 'entre las luces',
      url: '/songs//alterocio/entre_las_luces.mp3'
    });
  };

  const handleClickExtrano = () => {
    setCurrentSong({
      title: 'no soy un extraño',
      url: '/songs//alterocio/no_soy_un_extraño.mp3'
    });
  };

  const handleClickShiva = () => {
    setCurrentSong({
      title: 'shiva',
      url: '/songs//alterocio/shiva.mp3'
    });
  };

  return (
    <details open onClick={handleClickMercurio} className='mercurio__section alterocio__card alterocio__card--mercurio alterocio__details'>

      <summary className="bg-mercurio cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">mercúrio</h2>
      </summary>

      <DynamicDetails
        title="antes de morir"
        handleClick={handleClickMorir}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2018mercurio"
        folderName="antesdemorir"
      />

      <DynamicDetails
        title="entre las luces"
        handleClick={handleClickLuces}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2018mercurio"
        folderName="entrelasluces"
      />

      <DynamicDetails
        title="no soy un extraño"
        handleClick={handleClickExtrano}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2018mercurio"
        folderName="nosoyunextraño"
      />

      <DynamicDetails
        title="shiva"
        handleClick={handleClickShiva}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2018mercurio"
        folderName="shiva"
      />

    </details>
  )
}

export default Mercurio 