import React from 'react'
import style from './button.module.scss'
import cn from 'classnames'

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}

export const Button = ({ 
  children, 
  onClick,
  className,
  variant = 'primary',
  ...props
}: IButton ) => (
    <button  
      onClick={onClick} 
      className={
        className 
          ? className 
          : cn(style.button, style[variant])}
      {...props}
    >
      { children }
    </button>
  )