import React from 'react';
import { CreditCard, Palette as Paypal, AppleIcon } from 'lucide-react';

interface PaymentMethodsProps {
  selectedPayment: string | null;
  onSelectPayment: (method: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  selectedPayment,
  onSelectPayment,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Método de Pago</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => onSelectPayment('paypal')}
          className={`flex items-center justify-center p-4 border rounded-lg transition-all ${
            selectedPayment === 'paypal'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Paypal className="text-[#0070ba] mr-2" />
          <span className="font-medium">PayPal</span>
        </button>
        <button
          onClick={() => onSelectPayment('apple')}
          className={`flex items-center justify-center p-4 border rounded-lg transition-all ${
            selectedPayment === 'apple'
              ? 'border-gray-800 bg-gray-50'
              : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          <AppleIcon className="text-black mr-2" />
          <span className="font-medium">Apple Pay</span>
        </button>
        <button
          onClick={() => onSelectPayment('card')}
          className={`flex items-center justify-center p-4 border rounded-lg transition-all ${
            selectedPayment === 'card'
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          <CreditCard className="text-purple-600 mr-2" />
          <span className="font-medium">Tarjeta de Crédito</span>
        </button>
      </div>

      {/* Payment method specific content */}
      {selectedPayment === 'paypal' && (
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6 animate-fadeIn">
          <p className="text-center">Serás redirigido a PayPal para completar el pago</p>
        </div>
      )}

      {selectedPayment === 'apple' && (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 animate-fadeIn">
          <p className="text-center">Se abrirá Apple Pay para completar tu compra</p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;