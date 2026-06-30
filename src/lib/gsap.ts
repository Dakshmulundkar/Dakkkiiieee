import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const EASE = {
  outExpo: 'expo.out',
  inOutExpo: 'expo.inOut',
  outCubic: 'cubic.out',
  inOutCubic: 'cubic.inOut',
  outQuart: 'quart.out',
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.7,
  slow: 1.0,
  slower: 1.4,
} as const;
