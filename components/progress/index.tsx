import Image from 'next/image';
import dark6 from '@/assets/img/dark6.png';

export const Progress = (): JSX.Element => {
  return (
    <div className="w-full min-h-[600px] mt-10">
      <div className="flex justify-center items-center">
        <Image
          src={dark6}
          alt="Dark6"
          className="w-[350px] h-[350px] xl:w-[700px] xl:h-[700px] object-cover brightness-110                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      transition-all duration-500 ease-in-out"
        />
      </div>
      <h2 className="font-apex text-[96px] text-white text-center">
        Progess history
      </h2>
    </div>
  );
};
