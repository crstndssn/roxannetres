"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import Card from '../Card'

import inmune_n from '@/public/songs/inmune.mp3'
import q_lindo_es_el_sol from '@/public/songs/que_lindo_es_el_sol.mp3'
import wish_you_were_here from '@/public/songs/wish_you_were_here.mp3'


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
  const handleClickSur = () => {
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

  const handleClickCielo = () => {
    setCurrentSong({
      title: 'Inmune',
      url: inmune_n
    });
  };

  return (
    <details open onClick={handleClickAhora} className='genesis__section alterocio__card alterocio__card--ahora alterocio__details'>
      <summary className="bg-ahora cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">ahora</h2>
      </summary>
      {/* <DynamicDetails
        title="cielo"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="cielo"
      />
      <DynamicDetails
        title="fronteras"
        handleClick={() => console.log("Clicked fronteras")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="fronteras"
      />
      <DynamicDetails
        title="momentos"
        handleClick={() => console.log("Clicked momentos")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2024ahora"
        folderName="momentos"
      /> */}
      <DynamicDetails
        title="paraíso"
        handleClick={() => console.log("Clicked paraiso")}
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