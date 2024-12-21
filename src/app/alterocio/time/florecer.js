"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import Card from '../Card'


import sulky from '../resources/songs/sulky.mp3'
import centro__lamaquina from '../resources/songs/centro.mp3'
import norte_lj from '../resources/songs/norte.mp3'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
// Si necesitas otros módulos (como Navigation, Pagination, etc.), importa también su CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ViewModeButtons from '@/src/components/Imagenes/ViewModeButtons';
import DynamicDetails from '@/src/components/Imagenes/DynamicDetails';


const Florecer = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  // COLORS
  const handleClickFlorecer = () => {
    setColors({
      primary: '#FECD27',
      secondary: '#000'
    });
  };

  const handleClickMomento = () => {
    setCurrentSong({
      title: 'Inmune',
      url: inmune_n
    });
    setIsOpen(isOpen);
  };

  const handleClickParaiso = () => {
    setCurrentSong({
      title: 'Inmune',
      url: q_lindo_es_el_sol
    });
  };

  const handleClickSur = () => {
    setCurrentSong({
      title: 'Sulky',
      url: sulky
    });
  };

  return (
    <details onClick={handleClickFlorecer} className='florecer__section alterocio__card alterocio__card--florecer alterocio__details'>
      <summary className='alterocio__card--summary alterocio__summary flex items-center gap-3'>florecer<p className='pt-4 text-base tracking-normal'>2021</p></summary>
      <DynamicDetails
        title="curandera"
        handleClick={handleClickSur}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2021florecer"
        folderName="curandera"
      />
      <DynamicDetails
        title="en llamas"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2021florecer"
        folderName="enllamas"
      />
      <DynamicDetails
        title="salva tu piel"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2021florecer"
        folderName="salvatupiel"
      />
    </details>
  )
}

export default Florecer 