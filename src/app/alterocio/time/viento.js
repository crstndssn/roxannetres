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


const Viento = ({ setCurrentSong, setColors, id }) => {

  // GRID MODE
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  // COLORS
	const handleClickViento = () => {
		setColors({
			primary: '#4f9fd1',
			secondary: '#000'
		});
	};

	const handleClickUn = () => {
    setCurrentSong({
      title: 'uno',
      url: '/songs/alterocio/uno.mp3'
    });
  };

	const handleClickDo = () => {
    setCurrentSong({
      title: 'dos días en la vida',
      url: '/songs/alterocio/dos-dias-en-la-vida.mp3'
    });
  };

	const handleClickTre = () => {
    setCurrentSong({
      title: 'otro atardecer',
      url: '/songs/alterocio/otro-atardecer.mp3'
    });
  };

	const handleClickCua = () => {
    setCurrentSong({
      title: 'la realidad',
      url: '/songs/alterocio/la-realidad.mp3'
    });
  };


  return (
    <details open onClick={handleClickViento} className='viento__section alterocio__card alterocio__card--viento alterocio__details'>
      <summary className="bg-viento cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">viento</h2>
      </summary>
      <DynamicDetails
        title="un"
        handleClick={handleClickUn}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2022viento"
        folderName="un"
      />
      <DynamicDetails
        title="do"
        handleClick={handleClickDo}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2022viento"
        folderName="do"
      />
      <DynamicDetails
        title="tre"
        handleClick={handleClickTre}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2022viento"
        folderName="tre"
      />
      <DynamicDetails
        title="cua"
        handleClick={handleClickCua}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2022viento"
        folderName="cua"
      />
    </details>
  )
}

export default Viento