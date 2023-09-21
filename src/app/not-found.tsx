
import Link from 'next/link';
import MainNav from './components/MainNav';

export default function NotFound() {
  return (
    <main>
      <MainNav />

      <section className="flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="flex flex-col items-center justify-center text-4xl tracking-wide">
            Not found - 404
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Sorry, this page does not exist.
          </p>
          <Link href={'/'} className="btn btn-md mr-5 mx-4">
            Go back home
          </Link>
        </div>
      </section>
    </main>
  );
}
