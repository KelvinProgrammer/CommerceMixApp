import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <flexboxLayout className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </flexboxLayout>
  );
}