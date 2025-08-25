import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SignupFormProps {
  onSubmit: (email: string, password: string) => void;
  onLogin: () => void;
  className?: string;
}

export function SignupForm({ onSubmit, onLogin, className }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} testID={cn('signup-form', className)}>
      <Card>
        <CardContent>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.title}>Create an account</Text>
              <Text style={styles.subtitle}>Sign up for your Acme Inc account</Text>
            </View>
            <View style={styles.field}>
              <Label>Email</Label>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="m@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.field}>
              <Label>Password</Label>
              <Input
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <Button onPress={() => onSubmit(email, password)} style={styles.fullWidth}>
              <Text style={styles.buttonText}>Sign up</Text>
            </Button>
            <View style={styles.divider}>
              <Text style={styles.dividerText}>Or continue with</Text>
            </View>
            <View style={styles.socialRow}>
              <Button variant="outline" style={styles.socialButton}><Text>Apple</Text></Button>
              <Button variant="outline" style={styles.socialButton}><Text>Google</Text></Button>
              <Button variant="outline" style={styles.socialButton}><Text>Meta</Text></Button>
            </View>
            <View style={styles.footerRow}>
              <Text style={styles.smallText}>Already have an account? </Text>
              <Text style={[styles.smallText, styles.link]} onPress={onLogin}>Log in</Text>
            </View>
          </View>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.image} />
        </CardContent>
      </Card>
      <Text style={styles.terms}>
        By clicking continue, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 24,
  },
  form: {
    gap: 16,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
  },
  field: {
    gap: 4,
  },
  fullWidth: {
    width: '100%',
  },
  buttonText: {
    color: '#fff',
  },
  divider: {
    alignItems: 'center',
  },
  dividerText: {
    color: '#666',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 8,
  },
  socialButton: {
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  smallText: {
    fontSize: 12,
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  terms: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  image: {
    width: 0,
    height: 0,
  },
});
