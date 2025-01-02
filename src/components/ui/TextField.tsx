import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface TextFieldProps {
  hint: string;
  text: string;
  onTextChange: (e: { value: string }) => void;
  secure?: boolean;
  keyboardType?: string;
  className?: string;
}

export function TextField({ 
  hint, 
  text, 
  onTextChange, 
  secure = false, 
  keyboardType = 'text',
  className = ''
}: TextFieldProps) {
  return (
    <textField
      hint={hint}
      text={text}
      secure={secure}
      keyboardType={keyboardType}
      onTextChange={onTextChange}
      className={`p-4 border rounded ${className}`}
    />
  );
}