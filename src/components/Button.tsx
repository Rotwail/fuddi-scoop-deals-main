
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon
}) => {
  const baseClasses = 'font-medium rounded-full transition-all duration-200 focus:outline-none flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:opacity-90 active:scale-95',
    secondary: 'bg-secondary text-white hover:opacity-90 active:scale-95',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-50 active:scale-95'
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-6',
    lg: 'text-lg py-3 px-8'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
