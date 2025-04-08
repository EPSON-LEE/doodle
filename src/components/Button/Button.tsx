import React from 'react';

export interface ButtonProps {
  /**
   * 按钮内容
   */
  children: React.ReactNode;
  /**
   * 按钮类型
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * 按钮大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 点击事件处理函数
   */
  onClick?: () => void;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  const baseStyles = 'rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
  };

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 