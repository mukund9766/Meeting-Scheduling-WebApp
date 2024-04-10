import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Solo</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p className="text-gray-500 mb-8 text-center">Start for free, upgrade when ready</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Sign up</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Team</h3>
            <p className="text-4xl font-bold mb-4">$10</p>
            <p className="text-gray-500 mb-8 text-center">per user, billed annually</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Sign up</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <p className="text-gray-500 mb-8 text-center">Contact us for pricing</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Get a demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

