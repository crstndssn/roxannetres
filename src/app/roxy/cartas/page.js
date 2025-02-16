"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Carta from '../../carta'; // Usa este import para el componente Carta
import Cartas from '../../cartas'; // Parece que también estás importando Cartas, asegúrate de usarlo si es necesario

import ContenidoCartas from '../../../components/ContenidoCartas'

export default function CartasKam() {
    // Lista de imágenes
    const images = [
        "/erase-una-vez.jpg",
        "/arbol.jpg",
        "/montaña.jpg"
    ];

    // Efecto para cambiar la imagen automáticamente cada 1 segundo
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1000); // Cambia cada segundo

        return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonta el componente
    }, [images.length]);

    const [currentImage, setCurrentImage] = useState(0); // Cambié el estado a una constante actualizable
    const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

    return (

        <>
            <div className="min-h-screen bg-[url('/23rev.png')] bg-fixed bg-[length:100%_100%] md:bg-[url('/23.png')] bg-no-repeat md:bg-cover bg-center flex items-start justify-center bg-[#fffff9]">
                <div className="w-full">
                    <ContenidoCartas />
                </div>
            </div>
        </>

    );
}