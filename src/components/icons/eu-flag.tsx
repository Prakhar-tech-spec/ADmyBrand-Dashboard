import type { SVGProps } from 'react';

export const EUFlagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" {...props}>
        <defs><clipPath id="a"><path d="M0 0h32v24H0z"/></clipPath></defs>
        <g clipPath="url(#a)">
            <path fill="#003399" d="M0 0h32v24H0z"/>
            <g fill="#ffcc00">
                <g id="e">
                    <g id="d">
                        <g id="c">
                            <g id="b">
                                <path id="a" d="m16 2.1-1.236.899 1.236.899.472-1.453z" transform="translate(0 3.9)"/>
                                <use href="#a" transform="rotate(72 16 12)"/>
                            </g>
                            <use href="#a" transform="rotate(-72 16 12)"/>
                            <use href="#b" transform="rotate(144 16 12)"/>
                        </g>
                        <use href="#c" transform="scale(-1 1) translate(-32 0)"/>
                    </g>
                    <use href="#d" transform="rotate(72 16 12)"/>
                </g>
                <use href="#d" transform="rotate(-72 16 12)"/>
                <use href="#e" transform="rotate(144 16 12)"/>
            </g>
        </g>
    </svg>
);
