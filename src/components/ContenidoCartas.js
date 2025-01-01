"use client";

import { useState, useRef } from "react";

import Carta from "../app/carta";

const Contenido = () => {
    const [cartaSeleccionada, setCartaSeleccionada] = useState(1);

    // Referencia al contenedor de los links
    const scrollContainerRef = useRef(null);

    // Funciones para desplazar el contenedor
    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -150,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 150,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex flex-col bg-amarillito">
            {/* CONTENT */}
            <div className="m-8 md:mx-32">
                <Carta cartaSeleccionada={cartaSeleccionada} />
            </div>

            {/* LINKS */}
            <div className="bg-amarillito bg-cover bg-center fixed bottom-0 w-full flex justify-center items-center border-y border-black shadow-lg h-14">
                {/* Botón de flecha izquierda */}
                {/* <button
                    onClick={scrollLeft}
                    className="flex items-center justify-center text-white hover:text-gray-600"
                >
                    <img
                        src="/arrow-prev-small.svg"
                        alt="Scroll Left"
                        className="w-20 h-20 md:hidden"
                    />
                </button> */}

                {/* Contenedor de scroll horizontal */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-2 h-full items-center"
                >
                    {Array.from({ length: 1 }, (_, i) => i + 1).map((num) => (
                        <span
                            key={num}
                            className={`cursor-pointer flex justify-center items-center w-28 min-w-[100px] border h-8 border-black rounded-full text-center
                            ${
                                cartaSeleccionada === num
                                    ? "bg-black text-amarillo"
                                    : "bg-amarillo text-black"
                            }
                            hover:shadow-lg`}
                            onClick={() => setCartaSeleccionada(num)}
                        >
                            carta {num}
                        </span>
                    ))}
                </div>

                {/* Botón de flecha derecha */}
                {/* <button
                    onClick={scrollRight}
                    className="flex items-center justify-center text-black hover:text-gray-600"
                >
                    <img
                        src="/arrow-next-small.svg"
                        alt="Scroll Right"
                        className="w-20 h-20 md:hidden"
                    />
                </button> */}
            </div>
        </div>
    );
};

export default Contenido;
