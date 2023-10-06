import React from 'react';

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingPlanProps> = ({
  title,
  price,
  features,
}) => {
  return (
    <div className='bg-white rounded-lg m-6 p-10  shadow-neutral-focus  shadow-xl '>
      <div className='h-1/3  w-64'>
        <h1 className='align  text-2xl font-semibold mb-4'>{title}</h1>
        <p className='text-2xl font-bold mb-4'>{price}</p>
        <ul className='list-disc pl-6'>
          {features.map((feature, index) => (
            <li key={index} className='text-neutral mb-2 text-lg '>
              {feature}
            </li>
          ))}
        </ul>
        <button className='mt-4 btn btn-neutral w-full text-white rounded-lg '>
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
