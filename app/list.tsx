import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { router } from 'expo-router'

export default function ListScreen() {
  return (
    <ThemedView className='flex-1 items-center justify-center'>
      <ThemedText className='text-2xl'>Welcome to List</ThemedText>

      <ThemedText className='text-2xl' onPress={() => router.push('/details')}>Go to Details</ThemedText>
    </ThemedView>
  )
}
