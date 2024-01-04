import Link from 'next/link';
import { ChevronLeft } from 'lucide';
import Logo from '../components/Logo';

interface CheckPoint {
  id: number;
  title: string;
}

interface AuthLayoutProps {
  checkPoints: CheckPoint[];
  changePage: string;
  authPage: string;
  authLinks: string;
  authChangePage: string;
  customAuthComponent: JSX.Element;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  checkPoints,
  changePage,
  authPage,
  authLinks,
  authChangePage,
  customAuthComponent,
}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-neutral'>
      <div className='flex items-center flex-col px-10 rounded-xl bg-white py-10 '>
        <section className='flex flex-col justify-center items-center'>
          <div className='mr-auto'>
            <Link
              href='/'
              className='btn btn-base btn-sm text-neutral mb-12'
            >
              Home
            </Link>
          </div>
          <div className='flex flex-col items-center my-auto '>
            <h2 className='mb-10 text-xl font-bold text-neutral'>{authPage}</h2>
            {customAuthComponent}
            <h2 className='my-2'>or</h2>
            <h2>
              {changePage}
              <Link
                href={authLinks}
                className='text-accent hover:text-neutral-focus'
              >
                {authChangePage}
              </Link>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
