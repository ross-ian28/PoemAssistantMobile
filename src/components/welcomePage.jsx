import { Text, View, StyleSheet } from 'react-native';

export default function WelcomePage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Welcome page</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#36454F",
      borderWidth: 4,
      borderColor: '#8B6F47',
      borderRadius: 20, 
      shadowColor: '#000', 
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderStyle: 'dotted', 
      width: 200,
      height: 100
    }
  });