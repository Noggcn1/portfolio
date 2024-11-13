'use client';
import { Wave1 } from '@/assets/svg/wave1';
import { Wave2 } from '@/assets/svg/wave2';
import Dark5 from '@/assets/img/dark5.png';
import Image from 'next/image';
import { RainbowButton } from '../ui/rainbow-button';
import { Tec1 } from '@/assets/svg/tec1';
import { Binoculars } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWebStore } from '@/app/_store';

export const About = (): JSX.Element => {
  const { setSection, section } = useWebStore();

  const onMouseOver = () => {
    setSection('about');
  };

  const sectionActual = section === 'about';

  return (
    <div
      className="relative w-full flex flex-col mt-10 z-40"
      onMouseOver={onMouseOver}
    >
      <Wave1 className="w-full" />
      <div className="relative pt-[120px] md:pt-0 h-[600px] w-full bg-[#200431] m-0 px-2 flex justify-center gap-2 mt-[-10px] pr-4 items-center">
        <Image
          src={Dark5}
          alt="Dark5"
          className={cn(
            'w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] lgx:w-[500px] lgx:h-[500px] xl:w-[600px]  object-cover z-0 grayscale brightness-50 hover:brightness-100 hover:grayscale-0 transition-all duration-300',
            'absolute z-10 md:right-0 top-0 md:relative',
            `${sectionActual && 'brightness-110 grayscale-0'}`,
          )}
        />

        <div className="text-white lg:max-w-[620px] flex flex-col gap-14 pl-4 z-30">
          <h3 className="font-audiowide text-center md:text-start md:font-apex text-[22px] md:text-[32px] lg:text-[48px]">
            WELCOME TO MY WORLD
          </h3>

          <div className="flex flex-col gap-4">
            <p className="font-audiowide text-[14px]  text-center md:text-start px-4 md:px-0 md:pr-4 md:text-[16px] lg:text-[20px] leading-[1.5] mb-5">
              I&apos;m a 27-year-old developer passionate about games. My
              development journey began in 2019, when I also started studying
              systems analysis and development. Since then, I have faced
              countless challenges that have encouraged me to continue learning
              and growing. Along the way, I gained valuable knowledge that not
              only improves my skills, but also allows me to support and help my
              friends and colleagues.
            </p>
            <div className="flex justify-center md:justify-start gap-5 md:gap-10">
              <RainbowButton
                type="button"
                className="tracking-widest h-[40px] lg:h-[60px] w-[150px] lg:w-[200px] font-apex text-[12px] lg:text-[20px] p-0 gap-2 active:scale-90 transition-all before:h-[0px]"
              >
                <Tec1 className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]" />
                TECHNOLOGY
              </RainbowButton>
              <RainbowButton
                type="button"
                className="tracking-widest h-[40px] lg:h-[60px] w-[150px] lg:w-[200px] font-apex text-[12px] lg:text-[20px] p-0 gap-2 active:scale-90 transition-all before:h-[0px]"
              >
                <Binoculars className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]" />
                DETAILS
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
      <Wave2 className="w-full" />
    </div>
  );
};
