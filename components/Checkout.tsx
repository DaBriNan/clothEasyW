import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import ShippingForm from './ShippingForm';
import PaymentMethods from './PaymentMethods';
import CardForm from './CardForm';

const Checkout: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentSelection = (method: string) => {
    setSelectedPayment(method);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pedido finalizado con éxito');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <OrderSummary />
      
      <div className="p-6">
        <ShippingForm />
        
        <PaymentMethods
          selectedPayment={selectedPayment}
          onSelectPayment={handlePaymentSelection}
        />
        
        {selectedPayment === 'card' && (
          <CardForm 
            cardDetails={cardDetails}
            onChange={handleCardInputChange}
          />
        )}
        
        <button
          onClick={handleSubmit}
          disabled={!selectedPayment}
          className={`w-full py-3 rounded-lg text-white font-medium transition-all ${
            selectedPayment
              ? 'bg-[#3f51b5] hover:bg-[#2c3e90]'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
};

export default Checkout;