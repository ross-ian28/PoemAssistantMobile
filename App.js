import { View, StyleSheet } from 'react-native';
import Welcome from './src/screens/Welcome/welcome.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
