import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import avatarImg from 'public/images/AO.png';



export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/');
  }

  return (
    <main>
      <Image
        className="p-2 bg-neutral rounded-full"
        src={avatarImg}
        alt=""
        width="120"
        height="120"
      />    </main>
  );
}
