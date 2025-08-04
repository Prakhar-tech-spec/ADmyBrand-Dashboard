import type { SVGProps } from 'react';

export const RadialChart = ({
  progress,
  ...props
}: SVGProps<SVGSVGElement> & { progress: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props}>
      <circle
        className="text-primary-foreground/10"
        strokeWidth="10"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        className="text-primary-foreground"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        transform="rotate(-90 50 50)"
        strokeLinecap="round"
      />
    </svg>
  );
};
