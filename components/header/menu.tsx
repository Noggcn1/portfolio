import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '../ui/drawer';
import { LinkMenu } from './linkMenu';

export const MenuHeader = (): JSX.Element => {
  return (
    <>
      <div className="hidden lg:flex overflow-x-hidden">
        <nav className="lg:text-[14px] lgx:text-[16px] xl:text-[20px] font-apex flex gap-[35px] px-10 tracking-[4px] text-white">
          <LinkMenu href={'#about'}>about</LinkMenu>
          <LinkMenu href={'#experience'}>experience</LinkMenu>
          <LinkMenu href={'#projects'}>projects</LinkMenu>
          <LinkMenu href={'#contact'}>contact</LinkMenu>
        </nav>
      </div>

      {/* Drawer */}
      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu className="stroke-white m-4" />
          </DrawerTrigger>
          <DrawerContent className="text-white bg-black h-[80%] tracking-[12px]">
            <DrawerHeader className="text-white/50">
              <DrawerTitle className="text-[32px] font-audiowide uppercase flex items-center justify-between mx-5">
                Menu
                <DrawerClose>
                  <X />
                </DrawerClose>
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>

            <nav className="text-[30px] font-apex flex gap-[35px] px-10 flex-col items-center justify-center h-[400px] tracking-[12px]">
              <LinkMenu href={'#about'}>about</LinkMenu>
              <LinkMenu href={'#experience'}>experience</LinkMenu>
              <LinkMenu href={'#projects'}>projects</LinkMenu>
              <LinkMenu href={'#contact'}>contact</LinkMenu>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
