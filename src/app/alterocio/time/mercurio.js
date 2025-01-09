"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import antes_de_morir from '@/public/songs/antes_de_morir.mp3'
import entre_las_luces from '@/public/songs/entre_las_luces.mp3'
import no_soy_un_extraño from '@/public/songs/no_soy_un_extraño.mp3'
import shiva_song from '@/public/songs/shiva.mp3'

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
      url: antes_de_morir
    });
    setIsOpen(isOpen);
  };

  const handleClickLuces = () => {
    setCurrentSong({
      title: 'entre las luces',
      url: entre_las_luces
    });
  };

  const handleClickExtrano = () => {
    setCurrentSong({
      title: 'no soy un extraño',
      url: no_soy_un_extraño
    });
  };

  const handleClickShiva = () => {
    setCurrentSong({
      title: 'shiva',
      url: shiva_song
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
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2018mercurio"
        folderName="entrelasluces"
      />

      <DynamicDetails
        title="no soy un extraño"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2018mercurio"
        folderName="nosoyunextraño"
      />

      <DynamicDetails
        title="shiva"
        handleClick={() => console.log("Clicked shiva")}
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