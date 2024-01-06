import Link from 'next/link';

interface NavLinkProps {
  href: string;
  title: string;
  activeLink? : () => void;
}

export default function NavLink({ href, title, activeLink }: NavLinkProps) {
  return (
    <Link onClick={activeLink} className='flex justify-center items-center font-thin ' href={href}>
      <h1>{title}</h1>
    </Link>
  );
}
