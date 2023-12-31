import Feed from '@/app/components/Feed';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/');
  }

  return (
    <main>
      <h1>This is your dashboard</h1>
      <p>Hello {session.user.email}</p>
      <Feed />
    </main>
  );
}
 9