import React from 'react';

interface CardFormProps {
  cardDetails: {
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardForm: React.FC<CardFormProps> = ({ cardDetails, onChange }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 animate-fadeIn">
      <h3 className="font-medium mb-4">Detalles de la Tarjeta</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Número de Tarjeta</label>
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={onChange}
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nombre en la Tarjeta</label>
          <input
            type="text"
            name="cardName"
            value={cardDetails.cardName}
            onChange={onChange}
            placeholder="Juan Pérez"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Fecha de Expiración</label>
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={onChange}
              placeholder="MM/AA"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={onChange}
              placeholder="123"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;