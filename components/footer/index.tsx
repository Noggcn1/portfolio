import { Wave5 } from '@/assets/svg/wave5';
import Image from 'next/image';
import Dark from '@/assets/img/dark.png';

export const Footer = (): JSX.Element => {
  return (
    <div className="mt-20 w-full">
      <Wave5 className="w-full" />

      <div className="relative w-full bg-[#200431] h-[300px] md:h-[500px] flex flex-col justify-center items-center">
        <div className="flex w-full justify-center absolute top-[0px]">
          <Image
            src={Dark}
            alt="Dark"
            className="object-cover opacity-30 w-[250px] md:w-[400px] pointer-events-none grayscale brightness-75"
          />
        </div>
        <p className="text-white z-10 font-archivo font-black text-[12px] md:text-[26px] lg:text-[32px] text-center">
          © 2024 Julio Cesar Barreto Nogueira. <br /> Todos os direitos
          reservados.
        </p>
        <div className="text-white/80 font-archivo text-[12px] font-black z-10">
          CNPJ: 41.545.288/0001-67
        </div>
      </div>
    </div>
  );
};
