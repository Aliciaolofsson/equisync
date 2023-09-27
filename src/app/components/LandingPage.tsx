import Link from 'next/link';
import React from 'react';
import landingImg from '/public/images/landingImage.jpg';

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
     
      <div className='grid grid-cols-2 justify-center flex-col'>
        <section>
          <div className='bg-showjumpingImg bg-cover bg-center'>
            <div className='h-screen bg-whiteOverlay text-white flex justify-center items-center text-6xl'>
              Rider
            </div>
          </div>
        </section>
      </div>
      <div className='grid grid-cols-2 justify-center flex-col bg-neutral'>
        <section className='col-span-1 p-20 text-3xl text-white'>
          <h1>Post your riding lessons in one place</h1>
        </section>
      <section className=''>
          <div className='bg-landingImg bg-cover bg-center'>
            <div className='h-screen bg-whiteOverlay text-white flex justify-center items-center text-6xl'>
              Instructor
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}
