import SignUpForm from '@/app/components/SignUpForm';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AuthLayout from '../../../components/AuthLayout';

export default async function SignUpPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/dashboard');
  }
  const checkPoints = [
    {
      id: 1.1,
      title: 'Find trainers in your area',
    },
    {
      id: 1.2,
      title: 'Keep track of your riding lessons',
    },
  ];

  return (
    <AuthLayout
      checkPoints={checkPoints}
      authPage='Create an account'
      changePage='Already have an account?'
      authChangePage='&nbsp;Sign in'
      authLinks='sign-in'
      customAuthComponent={<SignUpForm />}
    />
  );
}
