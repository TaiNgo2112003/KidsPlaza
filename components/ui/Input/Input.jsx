import React from 'react';
import './Input.css';

export default function Input({ placeholder, type = 'text', value, onChange }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
