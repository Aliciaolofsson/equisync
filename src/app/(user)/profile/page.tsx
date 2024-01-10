'use client';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AvatarPicker from '@/app/(user)/profile/AvatarPicker';
import { Button } from '@/components/ui/button';
import { useUser } from '@/app/contexts/UserContext';
import { Avatar } from '@/components/ui/avatar';

export default function Profile() {
  const { user } = useUser();

  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (!session) {
  //   redirect('/');
  // }

  console.log('user: ', user);

  return (
    <main>
      <div className='grid grid-cols-4'>
        <AvatarPicker />
      </div>
      <h2>{user?.fullName}</h2>
      <div className='bg-sky-950 p-5 my-10 rounded-lg'>
        <div className='p-5 bg-secondary rounded-lg flex flex-col justify-center w-56'>
          <div className='flex flex-col items-center'>
            <Avatar className='flex justify-center items-center text-xl p-8 bg-slate-400'>
              BL
            </Avatar>
            <h1 className='text-lg font-bold my-2'>Horse</h1>
          </div>
          <h2>Gender:</h2>
          <h2>Age:</h2>
          <h2>Height:</h2>
          <h2>Discipline:</h2>
          <h2>Competition level:</h2>
        </div>
      </div>
    </main>
  );
}
