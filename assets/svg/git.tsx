import { SVGProps } from 'react';

export const GithubSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_56_45)">
        <path
          d="M15 .371c-8.287 0-15 6.716-15 15C0 22 4.298 27.621 10.256 29.602c.75.142 1.025-.322 1.025-.72 0-.357-.012-1.3-.019-2.55-4.172.904-5.052-2.013-5.052-2.013-.683-1.732-1.669-2.194-1.669-2.194-1.359-.93.105-.911.105-.911 1.506.105 2.298 1.545 2.298 1.545 1.337 2.293 3.511 1.63 4.369 1.247.134-.97.52-1.631.95-2.006-3.332-.375-6.833-1.665-6.833-7.413 0-1.637.581-2.975 1.544-4.025-.169-.378-.675-1.903.131-3.97 0 0 1.256-.402 4.125 1.538a14.38 14.38 0 013.75-.506 14.38 14.38 0 013.75.506c2.85-1.94 4.106-1.538 4.106-1.538.806 2.067.3 3.592.15 3.97.956 1.05 1.538 2.388 1.538 4.025 0 5.763-3.507 7.032-6.844 7.4.525.45 1.012 1.37 1.012 2.775 0 2.008-.018 3.62-.018 4.108 0 .394.262.862 1.031.712C25.706 27.615 30 21.99 30 15.372c0-8.285-6.716-15-15-15z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_56_45">
          <path fill="#fff" d="M0 0H30V30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
