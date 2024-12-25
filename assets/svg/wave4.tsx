import * as React from 'react';

export const Wave4 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1280 466"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_56_7)">
        <path
          d="M1280 131.062l-71.11-7.718c-71.11-8.3-213.334-22.863-355.557 0-142.222 23.737-284.444 84.9-426.666 100.918-142.223 16.019-284.445-16.018-355.556-31.018L0 177.662v-186.4H1280v139.8z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_56_7">
          <path
            fill="#fff"
            transform="rotate(180 640 233)"
            d="M0 0H1280V466H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
