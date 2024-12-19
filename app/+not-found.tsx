import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-2xl font-bold mb-4 dark:text-white">
          This screen doesn't exist.
        </Text>
        <Link 
          href="/" 
          className="mt-4 py-4"
        >
          <Text className="text-blue-500 text-lg">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}
