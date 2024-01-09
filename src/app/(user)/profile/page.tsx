import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AvatarPicker from '@/app/(user)/profile/AvatarPicker';
import { Button } from '@/components/ui/button';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/');
  }

  return (
    <main>
      <div className='grid grid-cols-4' >
        <AvatarPicker />
      </div>
      <h2>{session.user.email}</h2>
    </main>
  );
}
