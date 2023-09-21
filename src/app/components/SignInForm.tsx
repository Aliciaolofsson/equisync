"use client";

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Database } from '@/types/supabase.types';

function SignInForm() {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const formSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().max(72),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSignIn: SubmitHandler<z.infer<typeof formSchema>> = async (
    values: z.infer<typeof formSchema>,
  ) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error) throw error;
      router.push('/dashboard');
    } catch (error) {
      setError((error as Error).message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSignIn)} className="flex flex-col">
      <div className="flex flex-col space-y-2">
        <label>Email</label>
        <input
          type="email"
          placeholder="name@domain.com"
          className="border rounded p-2 w-72"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          {...form.register('email')}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="********"
          className="border rounded p-2 w-72"
          {...form.register('password')}
        />
      </div>
      <button type="submit" className="btn my-4">
        Sign In
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default SignInForm;
