"use client"

import React, { useEffect, useState } from 'react'
import { store } from '../../app/firebase'
import Link from 'next/link';

import Card from './Card'

import inmune_n from './resources/songs/inmune.mp3'
import q_lindo_es_el_sol from './resources/songs/que_lindo_es_el_sol.mp3'
import wish_you_were_here from './resources/songs/wish_you_were_here.mp3'


const Futuro = () => {

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


  return (
    <details className='genesis__section alterocio__card alterocio__card--futuro alterocio__details'>

      <summary className='alterocio__card--summary alterocio__summary'>futuro</summary>

      {/*  uno */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>uno</summary>
        <audio src={inmune_n} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            inmune.length !== 0 ?
              (inmune.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* mi vida */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>mi vida</summary>
        <audio src={q_lindo_es_el_sol} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            qlees.length !== 0 ?
              (qlees.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* subiendo */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>subiendo</summary>
        <audio src={wish_you_were_here} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            wywh.length !== 0 ?
              (wywh.map(item => (
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

			
      {/* afuera */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>afuera</summary>
        <audio src={wish_you_were_here} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            wywh.length !== 0 ?
              (wywh.map(item => (
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>
    </details>
  )
}

export default Futuro 