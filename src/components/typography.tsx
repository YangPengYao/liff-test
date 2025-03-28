import { cn } from '@/lib/utils';

interface TypographyH1Props extends React.ComponentPropsWithoutRef<'h1'> {
  children: React.ReactNode;
}

const TypographyH1 = ({ children, className, ...props }: TypographyH1Props) => {
  return (
    <h1
      {...props}
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
    >
      {children}
    </h1>
  );
};

interface TypographyH1Props extends React.ComponentPropsWithoutRef<'h4'> {
  children: React.ReactNode;
}

const TypographyH4 = ({ children, className, ...props }: TypographyH1Props) => {
  return (
    <h4
      {...props}
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h4>
  );
};

export { TypographyH1, TypographyH4 };
