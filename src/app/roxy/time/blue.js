"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ViewModeButtons from '@/src/components/Imagenes/ViewModeButtons';
import DynamicDetails from '@/src/components/Imagenes/DynamicDetails';


const Blue = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  // COLORS
  const handleClickBlue = () => {
    setColors({
      primary: '#3b64bc',
      secondary: '#000'
    });
  };

  // MUSIC
  const handleClickInmune = () => {
    setCurrentSong({
      title: 'inmune',
      url: '/songs/alterocio/inmune.mp3'
    });
    setIsOpen(isOpen);
  };

  const handleClickSol = () => {
    setCurrentSong({
      title: 'que lindo es el sol',
      url: '/songs/alterocio/que_lindo_es_el_sol.mp3'
    });
  };

  const handleClickWish = () => {
    setCurrentSong({
      title: 'wish you were here',
      url: '/songs/alterocio/wish_you_were_here.mp3'
    });
  };

  return (
    <details open onClick={handleClickBlue} className='blue__section alterocio__card alterocio__card--blue alterocio__details'>

<summary className="bg-blue cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">blue</h2>
      </summary>
      <DynamicDetails
        title="inmune"
        handleClick={handleClickInmune}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2019blue"
        folderName="inmune"
      />
      <DynamicDetails
        title="el sol"
        handleClick={handleClickSol}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2019blue"
        folderName="elsol"
      />
      <DynamicDetails
        title="wish you were here"
        handleClick={handleClickWish}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2019blue"
        folderName="wishyouwerehere"
      />

    </details>
  )
}

export default Blue