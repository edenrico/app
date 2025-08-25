import React from 'react';
import { useRouter } from 'expo-router';

import { LoginForm } from '@/components/LoginForm';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <LoginForm
      onSubmit={() => router.replace('/(tabs)')}
      onSignUp={() => router.push('/signup')}
    />
  );
}
