import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'default', children, style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        variant === 'outline' && styles.outline,
        pressed && styles.pressed,
        style,
      ]}
      {...props}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000',
  },
  pressed: {
    opacity: 0.7,
  },
});
