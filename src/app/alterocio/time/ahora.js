"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import Link from 'next/link';

import '../../../style/app.scss'

import Card from '../Card'

import inmune_n from '../resources/songs/inmune.mp3'
import q_lindo_es_el_sol from '../resources/songs/que_lindo_es_el_sol.mp3'
import wish_you_were_here from '../resources/songs/wish_you_were_here.mp3'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
// Si necesitas otros módulos (como Navigation, Pagination, etc.), importa también su CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ViewModeButtons from '@/src/components/Imagenes/ViewModeButtons';
import DynamicDetails from '@/src/components/Imagenes/DynamicDetails';


const Ahora = ({ setCurrentSong, setColors, id }) => {

  const [inmune, setInmune] = useState('')
  const [qlees, setQlees] = useState('')
  const [wywh, setWywh] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const inmune = async () => {
      const { docs } = await store.collection('new').where('title', '==', "inmune").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setInmune(newArray)
    }	
    inmune()
    const qlees = async () => {
      const { docs } = await store.collection('new').where('title', '==', "qlees").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setQlees(newArray)
    }
    qlees()
    const wywh = async () => {
      const { docs } = await store.collection('new').where('title', '==', "wywh").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setWywh(newArray)
    }
    wywh()
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

	const handleClickCielo = () => {
    setCurrentSong({
      title: 'Inmune',
      url: inmune_n
    });
  };

  return (
    <details onClick={handleClickAhora} className='genesis__section alterocio__card alterocio__card--ahora alterocio__details'>

      <summary className='alterocio__card--summary alterocio__summary'>ahora</summary>

      <DynamicDetails
        title="momento"
        handleClick={handleClickMomento}
        viewMode={viewMode}
        setViewMode={setViewMode}
        data={inmune}
        className="alterocio__card--border alterocio__card--momento"
      />

      <DynamicDetails
        title="qlees"
        handleClick={handleClickParaiso}
        viewMode={viewMode}
        setViewMode={setViewMode}
        data={qlees}
        className="alterocio__card--border alterocio__card--momento"
      />

      {/*  momento */}
      <details onClick={handleClickMomento} className='alterocio__card--border alterocio__card--momento'>
        <summary className='alterocio__card--header'>momento</summary>

        <ViewModeButtons setViewMode={setViewMode} />
    
        <div className='alterocio__card--grid'
						style={{
							height: '100%',
							overflowY: 'auto',
							padding: '10px',
						}}
				>
						{viewMode === 'grid' ? (
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            className="mySwiper"
            style={{ height: '100%' }}
          >
            {inmune.length !== 0 ? (
              inmune.map(item => (
                <SwiperSlide key={item.id}>
                  <Card images={item.imageLinks} title={item.title} category={item.category} />
                </SwiperSlide>
              ))
            ) : (
              <div>loading...</div>
            )}
          </Swiper>
        ) : (
          <div className="listView">
            {inmune.length !== 0 ? (
              inmune.map(item => (
                <div key={item.id} className="listView__item">
                  <Card images={item.imageLinks} title={item.title} category={item.category} />
                </div>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        )}
        </div>
      </details>

      {/*  momento */}
      <details onClick={handleClickMomento} className='alterocio__card--border alterocio__card--momento'>
        <summary className='alterocio__card--header'>momento</summary>

        <ViewModeButtons setViewMode={setViewMode} />
    
        <div className='alterocio__card--grid'
						style={{
							height: '100%',
							overflowY: 'auto',
							padding: '10px',
						}}
				>
						{viewMode === 'grid' ? (
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            className="mySwiper"
            style={{ height: '100%' }}
          >
            {inmune.length !== 0 ? (
              inmune.map(item => (
                <SwiperSlide key={item.id}>
                  <Card images={item.imageLinks} title={item.title} category={item.category} />
                </SwiperSlide>
              ))
            ) : (
              <div>loading...</div>
            )}
          </Swiper>
        ) : (
          <div className="listView">
            {inmune.length !== 0 ? (
              inmune.map(item => (
                <div key={item.id} className="listView__item grid grid-cols-3">
                  <Card images={item.imageLinks} title={item.title} category={item.category} />
                </div>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        )}
        </div>
      </details>


    </details>
  )
}

export default Ahora 