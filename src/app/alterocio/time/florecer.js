"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import Card from '../Card'


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

  const handleClickCalavero = () => {
    setCurrentSong({
      title: 'calavero',
      url: '/songs/alterocio/calavero.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickLlamas = () => {
    setCurrentSong({
      title: 'en llamas',
      url: '/songs/alterocio/enllamas.mp3'
    });
  };

  const handleClickPiel = () => {
    setCurrentSong({
      title: 'salva tu amor',
      url: '/songs/alterocio/salva-tu-amor.mp3'
    });
  };

  return (
    <details open onClick={handleClickFlorecer} className='florecer__section alterocio__card alterocio__card--florecer alterocio__details'>
      <summary className="bg-florecer cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">florecer</h2>
      </summary>
      <DynamicDetails
        title="calavero"
        handleClick={handleClickCalavero}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2021florecer"
        folderName="calavero"
      />
      <DynamicDetails
        title="en llamas"
        handleClick={handleClickLlamas}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2021florecer"
        folderName="enllamas"
      />
      <DynamicDetails
        title="salva tu piel"
        handleClick={handleClickPiel}
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