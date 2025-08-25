import React from 'react';
import { useRouter } from 'expo-router';

import { SignupForm } from '@/components/SignupForm';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <SignupForm
      onSubmit={() => router.replace('/(tabs)')}
      onLogin={() => router.back()}
    />
  );
}
