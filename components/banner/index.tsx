'use client';
import { useWebStore } from '@/app/_store';
import Dark2 from '@/assets/img/dark2.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Banner = (): JSX.Element => {
  const { setSection, section } = useWebStore();

  const onMouseOver = () => {
    setSection('banner');
  };

  const sectionActual = section === 'banner';

  return (
    <div className="w-full px-2" onMouseOver={onMouseOver}>
      <div className="relative flex h-[400px] md:h-[600px] lg:h-[900px] xl:h-[900px] 2xl:h-[1000px] min-w-full items-end justify-center lg:items-center lg:justify-start">
        <h1 className="text-[60px] md:text-[100px] lg:text-[110px] xl:text-[128px] font-audiowide text-white leading-none md:pl-[30px] lg:pl-[100px] z-30">
          Hi there, <br /> I&apos;m <span className="text-[#9D2BDF]">Nogg</span>
        </h1>

        <Image
          src={Dark2}
          alt="Dark2"
          width={1200}
          height={1200}
          className={cn(
            'absolute top-0 lg:right-0 w-[500px] h-[500px] md:w-[600px] md:h-[700px] lg:w-[700px] lg:h-[900px] xl:w-[900px] xl:h-[900px] 2xl:w-[1000px] 2xl:h-[1000px] object-cover transition-all duration-500',
            'grayscale hover:grayscale-0 brightness-50 hover:brightness-100 ',
            `${sectionActual && 'brightness-110 grayscale-0'}`,
          )}
        />
      </div>
    </div>
  );
};
