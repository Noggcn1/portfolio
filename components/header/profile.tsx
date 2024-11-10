import Image from 'next/image';
import Dark1Img from '@/assets/img/dark1.png';

export const Profile = (): JSX.Element => {
  return (
    <div className="relative h-[80px] md:h-[120px] lg:h-[160px] lgx:h-[180px] ml-[40px] md:ml-[80px] lg:ml-[100px] lgx:ml-[120px] flex items-center">
      <div className="w-[250px] md:w-[350px] lg:w-[400px] lgx:w-[500px] h-[50px] md:h-[60px] lg:h-[70px] lgx:h-[80px] bg-[#1a0b2e] transform skew-x-[-20deg] md:skew-x-[-30deg] border border-white rounded-[4px]">
        <div className="skew-x-[20deg] md:skew-x-[30deg] transform w-full tracking-[1px] pl-[45px] md:pl-[55px] lg:pl-[65px] lgx:pl-[80px] flex justify-between items-end pr-[30px] lgx:pr-[40px] h-[30px] md:h-[40px] lg:h-[45px] lgx:h-[50px]">
          <h1 className="text-white font-audiowide text-[18px] md:text-[22px] lgx:text-[32px] leading-none self-center">
            Nogg.cn1
          </h1>

          <p className="text-white font-apex text-[12px] md:text-[16px] lgx:pb-1 leading-none self-end tracking-[2px]">
            Level{' '}
            <span className="font-anonymousPro text-[16px] md:text-[20px] font-bold">
              4
            </span>
          </p>
        </div>
        <div className="relative pl-[50px] md:pl-[65px] lg:pl-[80px] lgx:pl-[100px] skew-x-[30deg] h-[8px] lgx:h-[10px]">
          <div className="absolute top-0 z-20 w-[130px] md:w-[180px] lg:w-[200px] lgx:w-[260px] h-[8px] lgx:h-[10px] rounded-full bg-green-300" />
          <div className="absolute top-0 z-10 w-[180px] md:w-[265px] lg:w-[300px] lgx:w-[380px] h-[8px] lgx:h-[10px] rounded-full bg-black border border-white0" />
        </div>
      </div>
      <Image
        src={Dark1Img}
        alt="Dark1"
        width={1000}
        height={1000}
        className="absolute top-0 left-[-35px] md:left-[-65px] lg:left-[-85px] lgx:left-[-100px] w-[80px] md:w-[120px] lg:w-[150px] lgx:w-[180px] object-cover z-40 brightness-100 hover:brightness-125 "
      />
    </div>
  );
};
