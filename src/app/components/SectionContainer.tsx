import { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  className?: string
}

function SectionContainer({ children, className }: Props) {
  return (
    <section className={`${className} flex justify-center w-full`}>
      <div className={`${className} flex items-center justify-between w-full max-w-8xl px-4`}>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;