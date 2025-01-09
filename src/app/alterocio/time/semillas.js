"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import Card from '../Card'


import sulky from '@/public/songs/sulky.mp3'
import centro__lamaquina from '@/public/songs/centro.mp3'
import norte_lj from '@/public/songs/norte.mp3'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
// Si necesitas otros módulos (como Navigation, Pagination, etc.), importa también su CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ViewModeButtons from '@/src/components/Imagenes/ViewModeButtons';
import DynamicDetails from '@/src/components/Imagenes/DynamicDetails';

const Semillas = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  // COLORS
  const handleClickSemillas = () => {
    setColors({
      primary: '#86A54F',
      secondary: '#000'
    });
  };

  // MUSIC
  const handleClickRefugios = () => {
    setCurrentSong({
      title: 'fuego en el mar',
      url: inmune_n
    });
    setIsOpen(isOpen);
  };

  const handleClickEfimero = () => {
    setCurrentSong({
      title: 'seres extraños',
      url: inmune_n
    });
    setIsOpen(isOpen);
  };

  const handleClickMar = () => {
    setCurrentSong({
      title: 'Mar',
      url: q_lindo_es_el_sol
    });
  };

  const handleClickQuedandote = () => {
    setCurrentSong({
      title: 'quedándote o yéndote',
      url: wish_you_were_here
    });
  };

  return (
    <details open onClick={handleClickSemillas} className='semillas__section alterocio__card alterocio__card--semillas alterocio__details'>
      <summary className="bg-semillas cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">semillas</h2>
      </summary>
      <DynamicDetails
        title="refugios"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="refugios"
      />
      <DynamicDetails
        title="efimero anacronico"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="efimeroanacronico"
      />
      <DynamicDetails
        title="mar"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="mar"
      />
      <DynamicDetails
        title="quedandote"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="quedandote"
      />
    </details>
  )
}

export default Semillas 