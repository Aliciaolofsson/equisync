'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Database } from '../types/supabase.types';

function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const formSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(6).max(72),
    firstName: z.string(),
    lastName: z.string(),
  });

  type user = z.infer<typeof formSchema>;

  const form = useForm<user>({
    resolver: zodResolver(formSchema),
  });

  const updateName = async (firstName: string, lastName: string) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const id = session?.user.id;

      const {} = await supabase
        .from('profiles')
        .update({ firstName: firstName, lastName: lastName })
        .eq('id', id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp: SubmitHandler<user> = async (values) => {
    try {
      setIsLoading(true);

      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) throw error;

      updateName(values.firstName, values.lastName);

      router.push('/dashboard');
    } catch (error) {
      setError((error as Error).message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSignUp)} className='flex flex-col'>
      <div className='flex flex-col space-y-2'>
        <label>First Name</label>
        <input
          type='firstName'
          className='border rounded p-2 w-72'
          autoCapitalize='none'
          autoCorrect='off'
          {...form.register('firstName')}
        />
        <label>Last Name</label>
        <input
          type='lastName'
          className='border rounded p-2 w-72'
          autoCapitalize='none'
          autoCorrect='off'
          {...form.register('lastName')}
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='name@domain.com'
          className='border rounded p-2 w-72'
          autoCapitalize='none'
          autoComplete='email'
          autoCorrect='off'
          {...form.register('email')}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='********'
          className='border rounded p-2 w-72'
          {...form.register('password')}
        />
      </div>
      <button type='submit' className='btn-md btn my-4'>
        {isLoading ? 'Loading' : 'Create Account'}
      </button>
      {error && <p className='text-red-500'>{error}</p>}
    </form>
  );
}

export default SignUpForm;
