import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function HomeScreen() {
  const insets = useSafeAreaInsets()

  type TodoItem = {
    id: number
    title: string
    completed: boolean
  }

  const [todos, setTodos] = useState<TodoItem[]>([
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
    },
    {
      id: 4,
      title: 'Share the app',
      completed: false
    }
  ])

  const toggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  return (
    <ThemedView className='flex-1 items-center'>
      <FlatList
        style={{ paddingTop: insets.top }}
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCompleted(item.id)}>
            <ThemedView className='flex-row items-center p-2 gap-3'>
              <View
                className={`w-6 h-6 rounded-full border-2 ${
                  item.completed ? 'bg-green-500 border-green-500' : 'border-gray-500'
                }`}
              />
              <ThemedText
                className={`text-lg ${item.completed ? 'line-through text-gray-600' : ''}`}
              >
                {item.title}
              </ThemedText>
            </ThemedView>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ThemedView>
  )
}
