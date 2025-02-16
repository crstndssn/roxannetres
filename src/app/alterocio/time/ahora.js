"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import Card from '../Card'


import { Swiper, SwiperSlide } from 'swiper/react';


import ViewModeButtons from '@/src/components/Imagenes/ViewModeButtons';
import DynamicDetails from '@/src/components/Imagenes/DynamicDetails';


const Ahora = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("listed");

  // COLORS
  const handleClickAhora = () => {
    setColors({
      primary: '#2c7d37',
      secondary: '#000'
    });
  };

  // MUSIC
  const handleClickCielo = () => {
    setCurrentSong({
      title: 'Lago en el cielo',
      url: '/songs/alterocio/lago-en-el-cielo.mp3'
    });
  };

  const handleClickMomentos = () => {
    setCurrentSong({
      title: 'Momentos',
      url: '/songs/alterocio/elvis.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickParaiso = () => {
    setCurrentSong({
      title: 'DtMF',
      url: '/songs/alterocio/dtmf.mp3'
    });
  };

  const handleClickFronteras = () => {
    setCurrentSong({
      title: 'Fronteras',
      url: '/songs/alterocio/pasajera-en-trance.mp3'
    });
  };

  return (
    <details open onClick={handleClickAhora} className='genesis__section alterocio__card alterocio__card--ahora alterocio__details'>
      <summary className="bg-ahora cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">ahora</h2>
      </summary>
      <DynamicDetails
        title="cielo"
        handleClick={handleClickCielo}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="cielo"
      />
      <DynamicDetails
        title="fronteras"
        handleClick={handleClickFronteras}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="fronteras"
      />
      <DynamicDetails
        title="momentos"
        handleClick={handleClickMomentos}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="momentos"
      />
      <DynamicDetails
        title="paraíso"
        handleClick={handleClickParaiso}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="paraiso"
      />
    </details>
  )
}

export default Ahora