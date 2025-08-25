import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export function Input({ style, ...props }: TextInputProps) {
  return <TextInput style={[styles.input, style]} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 4,
    padding: 8,
  },
});
