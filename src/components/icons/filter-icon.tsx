import type { SVGProps } from 'react';

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
