import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { FC, memo } from 'react';

interface LinkMenuProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const LinkM: FC<LinkMenuProps> = ({ className, children, ...props }) => {
  return (
    <Link
      className={cn(
        'hover:text-[#9D2BDF] transition-all duration-300 text-white font-apex active:text-[#9D2BDF]/70 active:scale-90 focus:text-[#9D2BDF]',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export const LinkMenu = memo(LinkM);
