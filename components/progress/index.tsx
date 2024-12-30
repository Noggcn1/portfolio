import Image from 'next/image';
import dark6 from '@/assets/img/dark6.png';
import progressJson from './progress.json';
import { CardProgress } from './card';

export const Progress = (): JSX.Element => {
  return (
    <div id="experience" className="w-full min-h-[600px] mt-10">
      <div className="flex justify-center items-center">
        <Image
          src={dark6}
          alt="Dark6"
          className="w-[300px] md:w-[450px] md:h-[450px] xl:w-[545px] xl:h-[545px] object-cover brightness-110 transition-all duration-1000 ease-in-out"
        />
      </div>

      <h2 className="font-apex text-[36px] md:text-[66px] xl:text-[96px] text-white text-center">
        Progess history
      </h2>

      <div className="relative min-h-[100px] flex flex-col gap-20 mt-32 mb-20">
        {/* <div className="absolute h-full w-[50%] bg-white" /> */}

        {progressJson.map((Item, index) => (
          <CardProgress
            key={index}
            side={index % 2 == 0 ? 'left' : 'right'}
            currently={progressJson.length - 1 == index}
          >
            <div className="w-full">
              <h2 className="font-audiowide text-[26px] md:text-[34px] lg:text-[40px] text-white text-center px-4">
                {Item.name}
              </h2>

              <div className="flex flex-col text-white/80 font-audiowide text-[16px] text-center mt-10 gap-2">
                <div className="flex w-full">
                  <p className="w-full flex justify-center items-center">
                    {Item.nameCompany}
                  </p>
                  <p className="w-full flex justify-center items-center">
                    {Item.type}
                  </p>
                </div>
                <div className="flex w-full">
                  <p className="w-full flex justify-center items-center">
                    {Item.duration}
                  </p>
                  <p className="w-full flex justify-center items-center text-[14px]">
                    {Item.dates}
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center mt-10 px-10">
                <ul className="list-disc">
                  {Item.functions.map((item, index) => (
                    <li
                      className="text-[#848484] text-[12px] leading-[16px]"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-white/90 text-[20px] font-audiowide text-center mt-10">
                Skills
              </h4>
              <div className="flex justify-center mt-10 flex-wrap gap-5 text-white font-bold bg-blue-600/60 rounded-lg py-2 px-4 mx-5">
                {Item.skills.map((item, index) => (
                  <p className="text-[12px] leading-[16px]" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </CardProgress>
        ))}
      </div>
    </div>
  );
};
