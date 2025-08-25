import React from 'react';
import { useRouter } from 'expo-router';

import { LoginForm } from '@/components/LoginForm';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <LoginForm
      onSubmit={(email, password) => router.replace('/(tabs)')}
      onSignUp={() => router.push('/signup')}
    />
  );
}
