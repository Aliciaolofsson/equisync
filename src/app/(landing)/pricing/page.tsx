import PricingCard from '@/app/(landing)/pricing/PricingCard';
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
      features: [
        'All Basic Plan features',
        'Additional Feature 4',
        'Additional Feature 5',
      ],
    },

    // Add more pricing plans as needed
  ];

  return (
    <div>
      <div className='flex justify-center items-center bg-neutral h-screen '>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
