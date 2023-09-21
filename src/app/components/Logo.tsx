import { Apple } from 'lucide-react';
import Link from 'next/link';

interface LogoProps {
  hideText?: boolean;
}

function Logo({ hideText }: LogoProps) {
  return (
    <Link className="flex items-center" href={'/'}>
      <Apple className="h-8 w-8" />

      {!hideText && (
        <div className="select-none">
          <span className="text-xl tracking-widest uppercase ml-2 font-bold">
            Equisync
          </span>
        </div>
      )}
    </Link>
  );
}

export default Logo;
