import * as React from 'react';

export const Wave3 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1280 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 67l71.111 5.3c71.111 5.7 213.333 15.7 355.556 0C568.889 56 711.111 14 853.333 3 995.556-8 1137.78 14 1208.89 24.3L1280 35v128H0V67z"
        fill="#fff"
      />
    </svg>
  );
};
