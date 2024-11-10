import { Profile } from './profile';
import { MenuHeader } from './menu';

export const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-full px-2">
      <Profile />

      <MenuHeader />
    </div>
  );
};
