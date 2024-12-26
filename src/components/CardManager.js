'use client'
import { useState } from 'react';

const CardManager = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState('');

  const addCard = () => {
    if (newCard.trim()) {
      setCards([...cards, newCard]);
      setNewCard('');
    }
  };

  const removeCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Gestor de Cartas</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-md mr-2"
          placeholder="Escribe el contenido de la carta"
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={addCard}
        >
          Añadir
        </button>
      </div>
      <div className="space-y-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md flex justify-between items-center"
          >
            <span>{card}</span>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeCard(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardManager;
