'use client';
import { Wave3 } from '@/assets/svg/wave3';
import { Wave4 } from '@/assets/svg/wave4';
import Angel from '@/assets/img/angel.png';
import OrbBlue from '@/assets/img/orbBlue.png';
import OrbPurple from '@/assets/img/orbPurple.png';
import SpawnupPNG from '@/assets/img/spawnup.png';
import Image from 'next/image';
import { RainbowButton } from '../ui/rainbow-button';
import { GithubSVG } from '@/assets/svg/git';
import { GloboSVG } from '@/assets/svg/globo';
import { ManSVG } from '@/assets/svg/man';

export const Projects = (): JSX.Element => {
  const classOrbs: { [key: number]: string } = {
    1: 'animate-spin-orbit1',
    2: 'animate-spin-orbit2',
    3: 'animate-spin-orbit3',
    4: 'animate-spin-orbit4',
  };

  const classOrbsPurple: { [key: number]: string } = {
    1: 'animate-spin-orbit-purple1',
    2: 'animate-spin-orbit-purple2',
    3: 'animate-spin-orbit-purple3',
    4: 'animate-spin-orbit-purple4',
  };

  const links: { [key: string]: string } = {
    github: 'https://github.com/Noggcn1/spawn-up',
    website: 'https://spawnup.vercel.app/',
  };

  const redirect = (e: string) => {
    const link = links[e];
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div id="projects" className="w-full mt-10 flex-col overflow-hidden">
      <Wave3 className="w-full" />

      <div className="relative pt-[50px] md:pt-0 w-full bg-white m-0 px-2 flex flex-col justify-center gap-2 mt-[-10px] pr-4 items-center pb-20">
        <div className="relative w-[250px] h-[300px]">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src={Angel}
              alt="Angel"
              className="w-[250px] animate-bounce-angel"
            />
          </div>

          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div
                key={index}
                className={`absolute inset-0 flex justify-center items-center ${
                  classOrbs[index + 1]
                }`}
              >
                <Image
                  src={OrbBlue}
                  alt={`Orb Blue ${index + 1}`}
                  className="w-[30px]"
                />
              </div>
            );
          })}

          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div
                key={index}
                className={`absolute inset-0 flex justify-center items-center ${
                  classOrbsPurple[index + 1]
                }`}
              >
                <Image
                  src={OrbPurple}
                  alt={`Orb Blue ${index + 1}`}
                  className="w-[30px] h-[30px]"
                />
              </div>
            );
          })}
        </div>

        <h2 className="font-apex text-[60px] md:text-[96px] my-4">PROJECTS</h2>

        <div className="flex flex-col justify-center items-center mt-[100px] gap-10 w-full md:px-20 lg:px-32 xl:px-52 ">
          <div className="relative bg-gray-800 w-full h-[380px] overflow-hidden rounded-[10px] max-w-[900px]">
            <h2 className="absolute text-white left-5 top-5 text-[32px] font-audiowide z-10">
              SPAWNUP
            </h2>
            <div className="opacity-30">
              <Image
                src={SpawnupPNG}
                alt="Spawnup"
                className="absolute top-0 left-0 z-[-2] w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 p-10 flex gap-2 md:gap-10 w-full justify-center items-center md:flex-row flex-col">
              <RainbowButton
                onClick={() => redirect('github')}
                className="w-[300px] font-apex flex gap-2 items-center justify-center active:scale-90 transition-all"
              >
                <GithubSVG /> GITHUB
              </RainbowButton>
              <RainbowButton
                onClick={() => redirect('website')}
                className="w-[300px] font-apex flex gap-2 items-center justify-center active:scale-90 transition-all"
              >
                <GloboSVG /> WEBSITE
              </RainbowButton>
              <RainbowButton className="w-[300px] font-apex flex gap-2 items-center justify-center active:scale-90 transition-all">
                <ManSVG /> TECH
              </RainbowButton>
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-2 justify-center items-center w-full">
            <Image src={ProjectNow} alt="Project Now" className="w-[200px]" />
            <Image src={ProjectNow} alt="Project Now" className="w-[200px]" />
          </div> */}
        </div>
      </div>

      <Wave4 className="w-full" />
    </div>
  );
};
