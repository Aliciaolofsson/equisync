import SignInForm from '@/app/(auth)/SignInForm';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AuthLayout from '../../AuthLayout';

export default async function SignInPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/dashboard');
  }

  const checkPoints = [
    {
      id: 1,
      title: 'Find trainers in your area',
    },
    {
      id: 2,
      title: 'Keep track of your riding lessons',
    },
  ];

  return (
    <AuthLayout
      checkPoints={checkPoints}
      authPage='Welcome back'
      changePage="Don't have an account?"
      authChangePage='&nbsp;Sign up'
      authLinks='sign-up'
      customAuthComponent={<SignInForm />}
    />
  );
}
