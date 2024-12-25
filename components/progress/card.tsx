import Image from 'next/image';
import orbBluePng from '@/assets/img/orbBlue.png';
import orbPurplePng from '@/assets/img/orbPurple.png';

interface CardProps {
  side: 'right' | 'left';
  currently?: boolean;
  children?: React.ReactNode;
}

export const CardProgress = ({
  side,
  currently = false,
  children,
}: CardProps): JSX.Element => {
  const container =
    side == 'right'
      ? 'relative flex gap-[10px] w-full my-4 overflow-hidden px-2'
      : 'relative flex justify-end w-full my-4 overflow-hidden px-2';
  const card =
    side == 'left'
      ? 'xl:max-w-[calc(50%+30px)] w-full flex flex-col items-center md:flex-row md:items-start gap-2 md:pl-10 xl:pl-0'
      : 'w-full xl:max-w-[calc(50%+30px)] flex flex-col items-center md:flex-row-reverse justify-end md:items-start gap-2 md:pl-0 md:pr-10 lg:pr-0';
  const content =
    side == 'right'
      ? 'w-full rounded-lg shadow-md'
      : 'w-full rounded-lg shadow-md';

  return (
    <div className={container}>
      <div className={card}>
        <Image
          src={currently ? orbPurplePng : orbBluePng}
          alt="OrbBlue"
          className="w-[50px] h-[50px] aspect-square m-2 md:m-2 animate-spin-pulse"
        />

        <div className={content}>{children}</div>
      </div>
    </div>
  );
};
