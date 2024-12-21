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


import inmune_n from '../resources/songs/inmune.mp3'
import q_lindo_es_el_sol from '../resources/songs/que_lindo_es_el_sol.mp3'
import wish_you_were_here from '../resources/songs/wish_you_were_here.mp3'


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
      url: inmune_n
    });
    setIsOpen(isOpen);
  };

  const handleClickSol = () => {
    setCurrentSong({
      title: 'que lindo es el sol',
      url: q_lindo_es_el_sol
    });
  };

  const handleClickWish = () => {
    setCurrentSong({
      title: 'wish you were here',
      url: wish_you_were_here
    });
  };

  return (
    <details onClick={handleClickBlue} className='blue__section alterocio__card alterocio__card--blue alterocio__details'>

      <summary className='alterocio__card--summary alterocio__summary flex items-center gap-3'>blue<p className='pt-4 text-base tracking-normal'>2019</p></summary>
      <DynamicDetails
        title="inmune"
        handleClick={() => console.log("Clicked inmune")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2019blue"
        folderName="inmune"
      />
      <DynamicDetails
        title="el sol"
        handleClick={() => console.log("Clicked el sol")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2019blue"
        folderName="elsol"
      />
      <DynamicDetails
        title="wish you were here"
        handleClick={() => console.log("clicked wish you were here")}
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