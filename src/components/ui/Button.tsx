import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
  onTap: () => void;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ onTap, label, variant = 'primary', className = '' }: ButtonProps) {
  const buttonClass = variant === 'primary' 
    ? 'bg-blue-500 text-white' 
    : 'bg-gray-100 text-blue-500';

  return (
    <button
      className={`p-4 rounded-lg ${buttonClass} ${className}`}
      onTap={onTap}
    >
      {label}
    </button>
  );
}