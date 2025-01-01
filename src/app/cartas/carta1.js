"use client";

import React, { useState } from "react";
import Popup from "../../components/Popup"; // Importa el componente Popup
import ContentPopUp from "../../components/ContentPopUp"; // Importa el componente Popup
import "../globals.css";

const Carta1 = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", content: [] });

  // Función para manejar el contenido del pop-up
  const handlePopupToggle = (title, content) => {
    setPopupContent({ title, content });
    setIsPopupVisible(true);
  };

  return (
    <div className="px-3 mb-12">
      <h1 className="font-bold text-2xl md:text-4xl mb-10 md:text-center">
        001
      </h1>
      <p className="text-lg md:text-xl">
        Estoy lejos, me siento lejos y creo que la única forma que he demostrado práctica al tener este tipo de conversaciones textualmente es hacerlo con un acento epistolar.
        Los momentos en los que nos alejamos, no me contestas las llamadas, no te contesto lo que quieres escuchar, te desapareces.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Más que una carta de amor es una carta de perdón porque, como quiera que sea, no puedo hacerlo ya que va en contra de mi naturaleza. Lo he intentado, pero no se me da, y por eso pido perdón por mi carácter, que aunque pida perdón lo seguiré teniendo. Me perdono no ser lo suficientemente perfecto como tú para este mundo. Envidio tu sensibilidad, tu forma de ver las cosas, tu orden en el caos de la ciudad que habitas. Eres alguien muy moderna, y me enamora eso. Yo lo trato de ser, pero no puedo. Te haría una carta en una máquina de escribir o te la enviaría con un ave que llamaríamos Pedrito, un tucán o un ave como la que vimos en Puerto Colombia.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Un ave con emociones desordenadas, con atracción por el agua, un ave rara, que puede parecer violenta. Sus ojos eran como los de un chulo o un reptil, no lo sé, pero su atracción por la humedad me lo confirmaba. Utilizaba como método de defensa un plumaje de colores. Ese momento parecía.
      </p>
      <p className="text-lg md:text-xl">
        Tengo un lenguaje muy particular para comunicar las cosas, lo he descubierto. Sonará freak, pero sí me gustaría hacer de este discurso algo diferente, una explosión de átomos, de anglicismos, de locura, de un sinsentido de tal forma que sea un sentido. Pero en este sinsentido, convertido en algo superior, siempre estás a mi lado iluminándome. Quizás cada vez que pienso que te vas es como cuando en Avatar la Nación del Fuego se debilitaba sin su sol. Así, eres esa baba de Dios, ese sol que penetra la cortina de mi alma y me fulmina en ese rincón donde me encuentro ebrio, salido de sí, sumido. Y una botella de cerveza se diluye entre mis patrones, esos que son enfermos del capitalismo y me tienen amarrado a su cama. Soy preso de su deseo de enamorar a Venus. Estoy en llamas, he tenido muchas batallas y, aunque he ganado muchas, me cuesta ganar la guerra.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Quiero verte y estoy desde mi prisión en esta isla llena de lujos, pero desierta. Mi llanto ha cerrado el cielo, pero no estás tú. Mi tierra es un desierto en medio del paraíso.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Mis emociones son una gráfica sinusoidal que va entre azul y rojo en medio de un sinsentido de palabras. Mis servidores están rotos, mi alma en reparación para mejorar su servicio en tiempo indeterminado como sudaca que soy. Y estás lejos, como ese sol en el solsticio de invierno. Cuánto te extraño, mi hueso al sol, ese sol de verano que me lleva por las montañas, me lleva por mares y a tu abrazo. Pero a este punto de la soledad creo que tu solsticio es mi invierno. No tengo pruebas ni dudas. Tu silencio y tus fotos sonrientes y resplandecientes como girasol me lo confirman…
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Samplear, escribir ebrio, corregir sobrio.
      </p>
      <br />
    </div>
  );
};

export default Carta1;
