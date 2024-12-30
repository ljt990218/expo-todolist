import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
export default function HomeScreen() {

  return (
    <ThemedView className='flex-1 items-center justify-center'>
      <ThemedText className='text-2xl'>Welcome to Expo</ThemedText>
    </ThemedView>
  )
}
