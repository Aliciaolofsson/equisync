'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Database } from '../types/supabase.types';
import { LogOut } from 'lucide-react';

function SignOutButton() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut({});
      if (error) throw error;
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className='flex items-center hover:text-red-600 text-sm'
    >
      <span className='mr-1'>
        <LogOut width={18} height={18} />
      </span>
      Sign Out
    </button>
  );
}

export default SignOutButton;
