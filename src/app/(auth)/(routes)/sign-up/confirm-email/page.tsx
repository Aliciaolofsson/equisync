// temporary page until we can enable auto-confirm
// https://github.com/supabase/auth-helpers/issues/569

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main>
      <h1>Please confirm your email</h1>
      <p>
        Click on the link in the email we just sent you to activate your
        account.
      </p>
    </main>
  );
}
