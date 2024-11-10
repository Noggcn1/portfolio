import { SVGProps } from 'react';

export const Wave2 = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 1280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1280 96.0001L1208.89 90.7001C1137.78 85.0001 995.556 75.0001 853.333 90.7001C711.111 107 568.889 149 426.667 160C284.444 171 142.222 149 71.1111 138.7L0 128V6.10352e-05H71.1111C142.222 6.10352e-05 284.444 6.10352e-05 426.667 6.10352e-05C568.889 6.10352e-05 711.111 6.10352e-05 853.333 6.10352e-05C995.556 6.10352e-05 1137.78 6.10352e-05 1208.89 6.10352e-05H1280V96.0001Z"
        fill="#200431"
      />
    </svg>
  );
};