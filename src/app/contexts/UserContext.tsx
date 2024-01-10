'use client';

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import LoadingIndicator from '../components/LoadingIndicator';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../types/supabase.types';

const supabase = createClientComponentClient<Database>();

type User = {
  email: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  initials: string | null;
  avatarUrl: string | null;
};

const Context = createContext({
  user: null as User | null,
  fetchData: () => {},
  addNamesToUserProfile: (firstName: string, lastName: string) => {},
  setEmail: (email: string) => {},
  setFirstName: (firstName: string) => {},
  setLastName: (lastName: string) => {},
  setAvatarUrl: (urlString: string) => {},
});

export const useUser = () => useContext(Context);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  const fetchData = useCallback(async () => {
    console.log('fetching data');
    const { data: profiles } = await supabase.from('profiles').select(`
      firstName,
      lastName,
      avatarUrl
    `);
    console.log('profiles', profiles);
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log('session', session);

    const profile = profiles?.[0];
    console.log('profile', profile);
    const sessionUser = session?.user;
    console.log('sessionUser', sessionUser);

    if (!profile || !sessionUser?.email) {
      setUser(null);
      console.log('setting user to null');
    } else {
      console.log('setting user');
      setUser({
        email: sessionUser.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        fullName: `${profile.firstName} ${profile.lastName}`,
        initials: `${profile.firstName?.[0]}${profile.lastName?.[0]}`,
        avatarUrl: profile.avatarUrl,
      });
    }
  }, []);

  const addNamesToUserProfile = async (firstName: string, lastName: string) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const id = session?.user.id;

    if (!id) {
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ firstName: firstName, lastName: lastName })
        .eq('id', id);

      fetchData();
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  const setAvatarUrl = useCallback(
    async (urlString: string) => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const id = session?.user.id;

      if (!id) {
        return;
      }
      try {
        const { error } = await supabase
          .from('profiles')
          .update({ avatarUrl: urlString })
          .eq('id', id);

        fetchData();
        if (error) throw error;
      } catch (error) {
        console.error(error);
      }
    },
    [fetchData]
  );

  const setEmail = useCallback(
    async (email: string) => {
      try {
        const { error } = await supabase.auth.updateUser({ email: email });

        fetchData();
        if (error) throw error;
      } catch (error) {
        console.error(error);
      }
    },
    [fetchData]
  );

  const setFirstName = useCallback(
    async (firstName: string) => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        const id = session?.user.id;

        if (!id) {
          return;
        }

        const { error } = await supabase
          .from('profiles')
          .update({ firstName: firstName })
          .eq('id', id);

        fetchData();
        if (error) throw error;
      } catch (error) {
        console.error(error);
      }
    },
    [fetchData]
  );

  const setLastName = useCallback(
    async (lastName: string) => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        const id = session?.user.id;

        if (!id) {
          return;
        }

        const { error } = await supabase
          .from('profiles')
          .update({ lastName: lastName })
          .eq('id', id);

        fetchData();
        if (error) throw error;
      } catch (error) {
        console.error(error);
      }
    },
    [fetchData]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (user === undefined)
    return (
      <div className='w-full min-h-screen flex justify-center items-center'>
        <LoadingIndicator size='lg' />
      </div>
    );

  return (
    <Context.Provider
      value={{
        user,
        fetchData,
        addNamesToUserProfile,
        setEmail,
        setFirstName,
        setLastName,
        setAvatarUrl,
      }}
    >
      {children}
    </Context.Provider>
  );
};
