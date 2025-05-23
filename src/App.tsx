import React, { useState } from 'react';
import { CreditCard, Palette as Paypal, AppleIcon } from 'lucide-react';

function App() {
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
    <div className="min-h-screen bg-gradient-to-b from-[#F6C1A7] to-[#E2DFDF] flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" alt="ClothEeasy Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold">ClothEeasy</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#6A65C6] text-white px-4 py-2 rounded-full">Vender</button>
          <button className="bg-[#008CCA] text-white px-4 py-2 rounded-full">Comprar</button>
          <button className="bg-[#3F5A05] text-white px-4 py-2 rounded-full">Para ti</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center my-8">
          <span className="text-[#2c3e90]">Bolsa de</span>{' '}
          <span className="text-[#3f51b5]">Compra</span>
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Order Summary */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/60" alt="Product" className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="font-medium">Camiseta Casual</h3>
                  <p className="text-sm text-gray-500">Talla: M | Color: Azul</p>
                </div>
              </div>
              <p className="font-semibold">$29.99</p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span>Total:</span>
              <span>$29.99</span>
            </div>
          </div>

          <div className="p-6">
            {/* Shipping Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Datos de Envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Dirección</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Ciudad</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Estado</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Código Postal</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Método de Pago</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => handlePaymentSelection('paypal')}
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
                  onClick={() => handlePaymentSelection('apple')}
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
                  onClick={() => handlePaymentSelection('card')}
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

              {/* Card Details Form */}
              {selectedPayment === 'card' && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 animate-fadeIn">
                  <h3 className="font-medium mb-4">Detalles de la Tarjeta</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Número de Tarjeta</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardInputChange}
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
                        onChange={handleCardInputChange}
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
                          onChange={handleCardInputChange}
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
                          onChange={handleCardInputChange}
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment processing message for other methods */}
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 ClothEeasy. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;