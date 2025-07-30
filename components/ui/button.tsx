import React from 'react';
import { CuboidIcon as Cube } from 'lucide-react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  showIcon?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      iconPosition = 'left',
      iconOnly = false,
      showIcon = true,
      children,
      icon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium rounded-full
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      whitespace-nowrap
    `;

    const variantStyles = {
      primary: `
        bg-red-300 text-red-300
        hover:bg-red-400 active:bg-red-500
        focus:ring-red-200
      `,
      secondary: `
        bg-transparent text-text-white border border-gray-200
        hover:bg-gray-50 hover:text-black active:bg-gray-100
        focus:ring-gray-300
      `,
      ghost: `
        bg-transparent text-text-primary
        hover:bg-gray-50 active:bg-gray-100
        focus:ring-gray-300
      `,
      light: `
        bg-white text-text-primary
        hover:bg-gray-50 active:bg-gray-100
        focus:ring-gray-300
      `,
    };

    const sizeStyles = {
      sm: iconOnly ? 'h-8 w-8 text-sm' : 'h-8 px-3 text-sm gap-1.5',
      md: iconOnly ? 'h-10 w-10 text-base' : 'h-10 px-4 text-base gap-2',
      lg: iconOnly ? 'h-12 w-12 text-lg' : 'h-12 px-6 text-lg gap-2.5',
    };

    const iconElement = icon || (
      <Cube size={size === 'sm' ? 14 : size === 'md' ? 16 : 18} />
    );

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {!iconOnly && showIcon && iconPosition === 'left' && iconElement}
        {iconOnly ? (showIcon ? iconElement : null) : children}
        {!iconOnly && showIcon && iconPosition === 'right' && iconElement}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
