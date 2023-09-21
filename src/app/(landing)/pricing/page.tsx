import PricingCard from '@/app/components/PricingCard';
import React from 'react';

const App = () => {
  const pricingPlans = [
    {
      title: 'Rider',
      price: 'FREE',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Trainer',
      price: '$19.99/month',
      features: ['All Basic Plan features', 'Additional Feature 4', 'Additional Feature 5'],
    },
    
    // Add more pricing plans as needed
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-accent">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} title={plan.title} price={plan.price} features={plan.features} />
      ))}
    </div>
  );
};

export default App;
