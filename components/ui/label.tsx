import React from 'react';
import { Text, TextProps } from 'react-native';

export function Label({ style, ...props }: TextProps) {
  return <Text style={style} {...props} />;
}
