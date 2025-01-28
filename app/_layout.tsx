import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the messaging page when the app starts
    router.replace('/(tabs)/messaging');
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hides headers globally
      }}
    />
  );
}
