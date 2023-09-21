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
      <div className='flex flex-col items-center justify-center bg-gradient-to-b from-accent to-blue-950   h-96    text-white text-6xl   tracking-wide'>
        <h1> Never miss out on a training oppertunity</h1>
        <h2 className='my-6 text-xl italic'>
          EquiSync makes riders and trainers connect
        </h2>
        <Link
          href='/sign-up'
          className='btn bg-transparent text-white hover:bg-accent-opacity  '
        >
          Saddle up
        </Link>
      </div>
      <div className='flex justify-center items-center flex-col p-20'>
        <h2 className='text-4xl'>Key features</h2>
        <section className='grid grid-cols-2 place-items-center justify-center text-xl'>
          <ul className='m-10'>
            {featureLists.map((featureList: any) => (
              <li key={featureList.id} className='tracking-wide m-4'>
                {featureList.listItem}
              </li>
            ))}
          </ul>

          <ul>
            {featureListsTwo.map((featureListTwo: any) => (
              <li
                key={featureListTwo.id}
                className='tracking-wide
          m-4'
              >
                {featureListTwo.listItem}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* <section className=''>
        <div className='bg-showjumpingImg bg-cover h-screen'>
          <div className='h-screen bg-whiteOverlay text-white flex justify-center items-center text-6xl'>
            <h1>Landing page</h1>
          </div>
        </div>
      </section> */}
    </div>
  );
}
