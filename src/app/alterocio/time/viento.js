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


const Viento = ({ setCurrentSong, setColors, id }) => {

  const [sur, setSur] = useState('')
  const [qlees, setQlees] = useState('')
  const [wywh, setWywh] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const sur = async () => {
      const { docs } = await store.collection('new').where('title', '==', "sur").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setSur(newArray)
    }
    sur()
    const norte = async () => {
      const { docs } = await store.collection('new').where('title', '==', "norte").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setNorte(newArray)
    }
    norte()
    const centro = async () => {
      const { docs } = await store.collection('new').where('title', '==', "centro").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setCentro(newArray)
    }
    centro()
  }, [])

	const handleClickAhora = () => {
		setColors({
			primary: '#2c7d37',
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

	const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  
	const handleClickSur = () => {
    setCurrentSong({
      title: 'Sulky',
      url: sulky
    });
  };

  return (
    <details onClick={handleClickAhora} className='viento__section alterocio__card alterocio__card--viento alterocio__details'>
      <summary className='alterocio__card--summary alterocio__summary flex items-center gap-3'>viento<p className='pt-4 text-base tracking-normal'>2022</p></summary>
      <DynamicDetails
        title="sur"
        handleClick={handleClickSur}
        viewMode={viewMode}
        setViewMode={setViewMode}
        data={sur}
        className="alterocio__card--border alterocio__card--momento"
      />
    </details>
  )
}

export default Viento 