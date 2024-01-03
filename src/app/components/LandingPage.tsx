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
    <div>
      <div className='flex flex-col items-center justify-center bg-neutral h-96 py-80 px-56  text-white text-8xl font-bold text-center '>
        <h1 className='py-24'>The Equestrian Community</h1>
        <Link
          href='/sign-up'
          className='btn bg-transparent text-white hover:bg-slate-600  normal-case text-lg'
        >
          Get connected
        </Link>
      </div>
      <div className='grid justify-center items-center md:grid-cols-2'>
        <div className='bg-showjumpingImg bg-cover'>hej</div>
        <div className='bg-blue-200'>hi</div>
        <div>då</div>
        <div>då</div>
      </div>
    </div>
  );
}
