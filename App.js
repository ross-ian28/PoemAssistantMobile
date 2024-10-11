import { View, StyleSheet } from 'react-native';
import AppStack from './src/screens/AppStack/AppStack';
export default function App() {
  return (
    <View style={styles.container}>
      <AppStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
