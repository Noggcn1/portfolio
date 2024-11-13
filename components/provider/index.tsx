'use client';

import { useWebStore } from '@/app/_store';
import { useEffect } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

export const Provider = (): JSX.Element => {
  const { setSection } = useWebStore();
  const { width } = useWindowSize();
  const { y } = useWindowScroll();

  useEffect(() => {
    if (width < 768) {
      if (y >= 0 && y <= 250) {
        setSection('banner');
      }
      if (y >= 300 && y <= 599) {
        setSection('about');
      }
      if (y >= 699 && y <= 1199) {
        setSection('progress');
      }
    }
  }, [y]);

  return <></>;
};
