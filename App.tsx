import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css'
// flex-1 items-center justify-center bg-red-500
export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-red-500'>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


