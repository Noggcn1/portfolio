import * as React from "react"

export const GmailSVG = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_77_31)">
        <path
          d="M45.938 0H14.061C6.296 0 0 6.296 0 14.063v31.874C0 53.705 6.296 60 14.063 60h31.874C53.705 60 60 53.704 60 45.937V14.064C60 6.295 53.704 0 45.937 0z"
          fill="#F4F2ED"
        />
        <path
          d="M9.758 47.587h7.458v-18.11l-10.654-7.99V44.39a3.195 3.195 0 003.196 3.196z"
          fill="#4285F4"
        />
        <path
          d="M42.784 47.587h7.458a3.195 3.195 0 003.196-3.196V21.486l-10.654 7.99"
          fill="#34A853"
        />
        <path
          d="M42.784 15.627v13.85l10.654-7.99v-4.262c0-3.952-4.512-6.206-7.67-3.835"
          fill="#FBBC04"
        />
        <path
          d="M17.216 29.477v-13.85L30 25.215l12.784-9.588v13.85L30 39.064"
          fill="#EA4335"
        />
        <path
          d="M6.563 17.225v4.261l10.653 7.99V15.627l-2.983-2.237c-3.164-2.37-7.67-.117-7.67 3.835z"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0_77_31">
          <path fill="#fff" d="M0 0H60V60H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
