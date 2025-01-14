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

const Futuro = ({ setCurrentSong, setColors, id }) => {

  const handleClickAhora = () => {
    setColors({
      primary: '#d14f6d',
      secondary: '#000'
    });
  };

  const handleClickAfuera = () => {
    setCurrentSong({
      title: 'instant-taneas',
      url: '/songs/alterocio/instant-taneas.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickAdentro = () => {
    setCurrentSong({
      title: 'Amor Amarillo',
      url: '/songs/alterocio/amor-amarillo.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickMivida = () => {
    setCurrentSong({
      title: 'Mi Vida',
      url: '/songs/alterocio/mi-vida.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickSubiendo = () => {
    setCurrentSong({
      title: 'El Tigre',
      url: '/songs/alterocio/el-tigre.mp3'
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <details open onClick={handleClickAhora} className='futuro__section alterocio__card alterocio__card--futuro alterocio__details'>
      
      <summary className="bg-futuro cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">futuro</h2>
      </summary>

      <DynamicDetails
        title="afuera"
        handleClick={handleClickAfuera}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2023futuro"
        folderName="afuera"
      />
      <DynamicDetails
        title="adentro"
        handleClick={handleClickAdentro}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2023futuro"
        folderName="adentro"
      />
      <DynamicDetails
        title="mi vida"
        handleClick={handleClickMivida}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2023futuro"
        folderName="vida"
      />
      <DynamicDetails
        title="subiendo"
        handleClick={handleClickSubiendo}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2023futuro"
        folderName="subiendo"
      />

    </details>
  )
}

export default Futuro 