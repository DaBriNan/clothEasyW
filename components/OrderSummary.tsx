import React from 'react';

const OrderSummary: React.FC = () => {
  return (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
      <div className="flex items-center justify-between py-3 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <img 
            src="https://images.pexels.com/photos/6347548/pexels-photo-6347548.jpeg?auto=compress&cs=tinysrgb&w=300" 
            alt="Camiseta" 
            className="w-16 h-16 object-cover rounded-md" 
          />
          <div>
            <h3 className="font-medium">Camiseta Casual</h3>
            <p className="text-sm text-gray-500">Talla: M | Color: Azul</p>
          </div>
        </div>
        <p className="font-semibold">$29.99</p>
      </div>
      <div className="mt-4 pt-2 border-t border-gray-100">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>$29.99</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-gray-600">Envío</span>
          <span>$4.99</span>
        </div>
        <div className="flex justify-between mt-3 font-semibold text-lg">
          <span>Total</span>
          <span>$34.98</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;