import { SVGProps } from 'react';

export const Wave1 = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 224L71.1111 229.3C142.222 235 284.444 245 426.667 229.3C568.889 213 711.111 171 853.333 160C995.556 149 1137.78 171 1208.89 181.3L1280 192V320H1208.89C1137.78 320 995.556 320 853.333 320C711.111 320 568.889 320 426.667 320C284.444 320 142.222 320 71.1111 320H0V224Z"
        fill="#200431"
      />
    </svg>
  );
};
