import React from 'react';

export interface SpanProps {
  placeholder?: React.ReactNode;
}

const Span: React.SFC<SpanProps> = ({ placeholder = '', children }) => {
  return <span>{children || placeholder}</span>;
};

export default Span;
