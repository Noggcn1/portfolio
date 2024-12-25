import * as React from "react"

export const LinkedInSVG = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.375 1.406H5.625a4.177 4.177 0 00-4.219 4.125v48.947a4.177 4.177 0 004.219 4.116h48.75a4.187 4.187 0 004.219-4.13V5.517a4.186 4.186 0 00-4.219-4.11z"
        fill="#0076B2"
      />
      <path
        d="M9.872 22.842h8.489v27.314H9.87V22.842zm4.247-13.594a4.922 4.922 0 110 9.843 4.922 4.922 0 010-9.843zm9.567 13.594h8.137v3.75h.113c1.134-2.147 3.9-4.411 8.03-4.411 8.596-.019 10.19 5.639 10.19 12.975v15h-8.489v-13.29c0-3.163-.056-7.237-4.41-7.237-4.355 0-5.096 3.45-5.096 7.031v13.496h-8.475V22.842z"
        fill="#fff"
      />
    </svg>
  )
}