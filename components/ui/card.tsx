import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export function Card({ style, ...props }: ViewProps) {
  return <View style={[styles.card, style]} {...props} />;
}

export function CardContent({ style, ...props }: ViewProps) {
  return <View style={[styles.content, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    padding: 0,
  },
});
