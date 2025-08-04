import type { SVGProps } from 'react';

export const USFlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" {...props}>
    <defs><clipPath id="a"><path d="M0 0h32v24H0z"/></clipPath></defs>
    <g clipPath="url(#a)">
      <path fill="#c1002a" d="M0 0h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0z"/>
      <path fill="#fff" d="M0 2.4h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0zm0 4.8h32v2.4H0z"/>
      <path fill="#00247d" d="M0 0h16v14.4H0z"/>
      <g fill="#fff" transform="translate(8 7.2) scale(1.6)">
        <g id="e">
          <g id="d">
            <g id="c">
              <g id="b">
                <path id="a" d="m0-1-.19.617.5.383h-.618l.236.583z"/>
                <use href="#a" transform="scale(-1 1)"/>
              </g>
              <use href="#b" transform="rotate(72)"/>
            </g>
            <use href="#b" transform="rotate(-72)"/>
            <use href="#c" transform="rotate(144)"/>
          </g>
          <use href="#d" y="-2.4"/>
          <use href="#d" y="2.4"/>
        </g>
        <use href="#e" x="2.4"/>
        <use href="#e" x="4.8"/>
        <use href="#d" x="-2.4" y="1.2"/>
        <use href="#d" x="-1.2" y="-1.2"/>
        <use href="#d" x="1.2" y="-1.2"/>
        <use href="#d" x="3.6" y="1.2"/>
        <use href="#d" x="6" y="-1.2"/>
      </g>
    </g>
  </svg>
);
