import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  type TodoItem = {
    id: number
    title: string
    completed: boolean
  }

  const todoList: TodoItem[] = [
    {
      id: 1,
      title: 'Learn React Native',
      completed: false
    },
    {
      id: 2,
      title: 'Build an app',
      completed: false
    },
    {
      id: 3,
      title: 'Publish the app',
      completed: false
    }
  ]

  return (
    <SafeAreaView className='flex-1'>
      <ThemedView className='flex-1 items-center justify-center'>
        <FlatList
          className='mt-2'
          data={todoList}
          renderItem={({ item }) => <ThemedText className='mt-2'>{item.title}</ThemedText>}
          keyExtractor={(item) => item.id.toString()}
        />
      </ThemedView>
    </SafeAreaView>
  )
}
