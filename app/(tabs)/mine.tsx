import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { router } from 'expo-router'

export default function TabTwoScreen() {
  return (
    <ThemedView className='flex-1 items-center justify-center'>
      <ThemedText className='text-2xl' onPress={() => router.push('/list')}>
        Go To List
      </ThemedText>

      <ThemedText className='text-2xl' onPress={() => router.push('/details')}>
        Go To Details
      </ThemedText>
    </ThemedView>
  )
}
