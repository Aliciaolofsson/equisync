"use client";

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Database } from '@/types/supabase.types';

function SignUpForm() {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const formSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(6).max(72),
  });

  type user = z.infer<typeof formSchema>;

  const form = useForm<user>({
    resolver: zodResolver(formSchema),
  });

  const handleSignUp: SubmitHandler<user> = async (values) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: { emailRedirectTo: `${location.origin}/auth/callback` },
      });
      if (error) throw error;
      router.push('/sign-up/confirm-email');
    } catch (error) {
      setError((error as Error).message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSignUp)} className="flex flex-col">
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
        Create Account
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default SignUpForm;
