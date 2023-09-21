import Link from 'next/link';
import Logo from './Logo';

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
  customAuthComponent
}) => {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-base-300">
      <div className="flex flex-row items-center rounded-xl bg-white h-3/4 w-3/4">
        <section className="bg-neutral rounded-l-xl flex-col p-10 w-full h-full">
          <div className="flex flex-row items-center text-white">
            <Logo />
          </div>
          <div className="flex flex-col justify-center items-center py-20 h-3/4 text-white ">
            <h2 className="text-xl"></h2>
            <div>
              {checkPoints.map((checkPoint) => (
                <div className="flex items-center" key={checkPoint.id}>
                  <h2 className="tracking-wide">{checkPoint.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="p-10 h-full w-3/4 flex flex-col justify-center items-center">
          <div className="mr-auto">
            <Link
              href="/"
              className="btn btn-circle bg-transparent border-transparent"
            >
            </Link>
          </div>

          <div className="flex flex-col items-center my-auto">
            <h2 className="mb-10 text-xl font-bold text-neutral">{authPage}</h2>
            {customAuthComponent}
            <h2 className="my-2">or</h2>
            <h2>
              {changePage}
              <Link
                href={authLinks}
                className="text-accent hover:text-neutral-focus"
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
