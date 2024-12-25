import { Wave5 } from '@/assets/svg/wave5';
import Image from 'next/image';
import Dark from '@/assets/img/dark.png';

export const Footer = (): JSX.Element => {
  return (
    <div className="mt-20 w-full">
      <Wave5 className="w-full" />

      <div className="relative w-full bg-[#200431] h-[300px] flex justify-center items-center">
        <div className="flex w-full justify-center absolute top-[0px]">
          <Image
            src={Dark}
            alt="Dark"
            className="object-cover opacity-30 w-[250px] md:w-auto"
          />
        </div>
        <p className="text-white z-10 font-archivo text-[12px] md:text-[16px] lg:text-[32px]">
          © 2024 Julio Cesar Barreto Nogueira. <br /> Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};
