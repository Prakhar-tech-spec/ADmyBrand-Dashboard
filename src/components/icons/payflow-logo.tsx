
import type { SVGProps } from 'react';

export const PayflowLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="white" />
    <path
      d="M12 2L10.5 7.5L12 12L13.5 7.5L12 2Z"
      fill="black"
    />
    <path
      d="M22 12L16.5 10.5L12 12L16.5 13.5L22 12Z"
      fill="black"
    />
    <path
      d="M12 22L13.5 16.5L12 12L10.5 16.5L12 22Z"
      fill="black"
    />
    <path
      d="M2 12L7.5 13.5L12 12L7.5 10.5L2 12Z"
      fill="black"
    />
  </svg>
);
