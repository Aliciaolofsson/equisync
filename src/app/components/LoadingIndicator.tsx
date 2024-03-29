
import { Loader2 } from 'lucide-react';

interface LoadingIndicatorProps {
  text?: string;
  size?: 'sm' | 'base' | 'lg';
}

export default function LoadingIndicator({
  text,
  size = 'base',
}: LoadingIndicatorProps) {
  const svgSize = (() => {
    switch (size) {
      case 'sm':
        return 6;
      case 'base':
        return 8;
      case 'lg':
        return 12;
    }
  })();

  return (
    <div className="flex gap-2 items-center">
      <Loader2 className={`animate-spin h-${svgSize} w-${svgSize}`} />

      {text && <p className={`text-${size}`}>{text}</p>}
    </div>
  );
}