import ContactPNG from '@/assets/img/contact.png';
import { GithubSVG } from '@/assets/svg/git';
import { GmailSVG } from '@/assets/svg/gmail';
import { LinkedInSVG } from '@/assets/svg/linkedin';
import Image from 'next/image';

export const Contact = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Image
        src={ContactPNG}
        alt="Contact"
        className="w-[500px] h-[500px] object-cover"
      />
      <h1 className="font-apex text-[50px] lg:text-[95px] text-white">
        Contact
      </h1>

      <div className="text-white font-archivo text-[20px] lg:text-[40px] leading-[1.5] mb-10 mt-20 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <GmailSVG />
          <p>nogueira.julio1997@gmail.com</p>
        </div>
        <div className="flex gap-4 items-center">
          <LinkedInSVG />
          <p>/noggcn1</p>
        </div>
        <div className="flex gap-4 items-center">
          <GithubSVG className="w-[60px] h-[60px]" />
          <p>/noguecisar97</p>
        </div>
      </div>
    </div>
  );
};
