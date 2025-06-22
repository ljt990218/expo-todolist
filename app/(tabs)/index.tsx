import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRef, useState } from 'react'

export default function HomeScreen() {
  type TodoItem = {
    id: number
    title: string
    completed: boolean
  }

  const flatListRef = useRef<FlatList<TodoItem>>(null)

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

  const addTodo = () => {
    setTodos((prevTodos) => {
      const newTodos = {
        id: prevTodos.length + 1,
        title: 'New Todo',
        completed: false
      }
      return [...prevTodos, newTodos]
    })
    flatListRef.current?.scrollToIndex({ index: todos.length - 1, animated: true })
  }

  return (
    <ThemedView className='flex-1 bg-white'>
      <SafeAreaView className='flex-1'>
        <View className='w-full flex-1'>
          {/* 列表 */}
          <FlatList
            ref={flatListRef}
            contentContainerStyle={{ paddingBottom: 80 }}
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleCompleted(item.id)}>
                <View className='flex-row items-center p-2 pl-10 gap-3'>
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
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

          {/* 添加按钮 */}
          <View className='absolute' style={{ bottom: 60, right: 20 }}>
            <TouchableOpacity
              onPress={addTodo}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8
              }}
            >
              <View
                className='w-14 h-14 rounded-full items-center justify-center'
                style={{
                  backgroundColor: 'rgba(99, 102, 241, 0.8)',
                  borderWidth: 1,
                  borderColor: 'rgba(139, 92, 246, 0.6)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <ThemedText
                  lightColor='white'
                  darkColor='white'
                  style={{ fontSize: 16, fontWeight: 'bold' }}
                >
                  +
                </ThemedText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}
