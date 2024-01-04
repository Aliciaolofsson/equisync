import Link from 'next/link';
import React from 'react';

export default function Home() {
  const featureLists = [
    {
      id: 'FeatItem1',
      listItem: 'equisync',
    },
    {
      id: 'FeatItem2',
      listItem: 'equisync',
    },
    {
      id: 'FeatItem3',
      listItem: 'equisync',
    },
  ];
  const featureListsTwo = [
    {
      id: 'FeatItemTwo1',
      listItem: 'placeholder',
    },
    {
      id: 'FeatItemTwo3',
      listItem: 'placeholder',
    },
    {
      id: 'FeatItemTwo2',
      listItem: 'placeholder',
    },
  ];
  return (
    <main className='flex flex-col'>
      <div className='flex justify-center items-center text-white flex-col bg-neutral py-12 md:py-32'>
        <h1 className='py-16 text-4xl font-bold  md:text-8xl'>
          The Equestrian <br />
          Community
        </h1>
        <Link
          href='/sign-up'
          className='btn bg-transparent text-white hover:bg-slate-600 normal-case md:text-lg'
        >
          Get connected
        </Link>
      </div>
      <div className='grid justify-center items-center md:grid-cols-2'>
        <div className='bg-sky-50 p-56'>hej</div>
        <div className='bg-blue-200 p-56'>hi</div> 
        <div className='bg-orange-200 p-56'>hio</div>
        <div className='bg-red-500 bg-cover p-56'>fe</div>
      </div>
    </main>
  );
}
