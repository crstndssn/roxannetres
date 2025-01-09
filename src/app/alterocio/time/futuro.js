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


const Futuro = ({ setCurrentSong, setColors, id }) => {

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
      primary: '#d14f6d',
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
    <details open onClick={handleClickAhora} className='futuro__section alterocio__card alterocio__card--futuro alterocio__details'>
      
      <summary className="bg-futuro cursor-pointer p-12 flex flex-col justify-center items-center rounded-xl mb-2">
        <h2 className="alter-font text-4xl md:text-5xl text-black">futuro</h2>
      </summary>

      <DynamicDetails
        title="afuera"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="refugios"
      />
      <DynamicDetails
        title="adentro"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="refugios"
      />
      <DynamicDetails
        title="mi vida"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="refugios"
      />
      <DynamicDetails
        title="subiendo"
        handleClick={() => console.log("Clicked Cielo")}
        className="alterocio__card--border alterocio__card--momento"
        viewMode={viewMode}
        setViewMode={setViewMode}
        basePath="alterocio/2020semillas"
        folderName="refugios"
      />

    </details>
  )
}

export default Futuro 