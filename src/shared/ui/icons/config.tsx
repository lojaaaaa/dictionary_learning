import { ReactNode } from 'react';

export type IconVariantType = 'accent' | 'grey' | 'black' | 'inherit';

type IconSizeType = 'xs' |'s' | 'm'| 'l';

export interface IconProps {
  variant?: IconVariantType;
  size?: IconSizeType;
  className?: string;
}

const color: Record<IconVariantType, string> = {
  accent: 'white',
  grey: 'grey',
  black: '#231F23',
  inherit: 'currentColor',
};

const sizes: Record<IconSizeType, number> = {
  xs: 16,
  s: 20,
  m: 24,
  l: 30,
};

export const createIcon =
  (children: ReactNode) =>
  ({ variant = 'accent', size = 'm', className }: IconProps) =>
    (
      <svg
        className={className}
        style={{ color: color[variant] }}
        width={sizes[size]}
        height={sizes[size]}
        viewBox={`0 0 ${sizes[size]} ${sizes[size]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    );
