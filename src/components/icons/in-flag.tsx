
import type { SVGProps } from 'react';

export const INFlagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" {...props}>
        <defs><clipPath id="a"><path d="M0 0h32v24H0z"/></clipPath></defs>
        <g fillRule="evenodd" clipPath="url(#a)">
            <path fill="#f93" d="M0 0h32v8H0z"/>
            <path fill="#fff" d="M0 8h32v8H0z"/>
            <path fill="#128807" d="M0 16h32v8H0z"/>
            <g transform="translate(16 12) scale(3.2)">
                <circle r="1" fill="#000080"/>
                <circle r=".8" fill="#fff"/>
                <circle r=".16" fill="#000080"/>
                <g id="d" fill="#000080">
                    <g id="c">
                        <g id="b">
                            <path id="a" d="M-.034.498.034.498.05.492.03.486z" transform="rotate(7.5)"/>
                            <use href="#a" transform="scale(-1 1)"/>
                        </g>
                        <use href="#b" transform="rotate(15)"/>
                    </g>
                    <use href="#c" transform="rotate(30)"/>
                    <use href="#c" transform="rotate(60)"/>
                </g>
                <use href="#d" transform="rotate(90)"/>
                <use href="#d" transform="rotate(180)"/>
            </g>
        </g>
    </svg>
);
