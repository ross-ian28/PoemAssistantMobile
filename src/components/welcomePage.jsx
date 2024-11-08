import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Backdrop from './../assets/images/purple_victorian_background.jpg'

export default function WelcomePage({ navigation }) {
  const toolData = [
    {id: 1, tool_name: 'Dictionary'},
    {id: 2, tool_name: 'Grammar Checker'},
    {id: 3, tool_name: 'General Search'},
    {id: 4, tool_name: 'Prompt Generator'},
    {id: 5, tool_name: 'Rhyme'},
    {id: 6, tool_name: 'Thesaurus'},
    {id: 7, tool_name: 'Word Generator'}
  ]; 

  const renderItem = ({ item }) => (
    <TouchableOpacity       
      onPress={() => { navigation.navigate(item.tool_name) }}
      style={{
        padding: 10,
        margin: 5,
        borderRadius: 30,
        width: 200,
        borderWidth: 2,
        alignItems: "center",
        color: "white",
        borderColor: "white"
      }}
    >
      <Text style={{color: "white"}}>{item.tool_name}</Text>
    </TouchableOpacity>
  );

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground style={{flex: 1, alignItems: "center", width: "100%", height: "100%"}}source={Backdrop}>
        <View style={{marginTop: 30, alignItems: "center"}}>
          <Text style={{fontSize: 36, color: "white", textAlign: "center"}}>Welcome to Poem Assistant!</Text>
          <Text style={{color: "white", fontSize: 18, marginTop: 10}}>Select a tool to get started</Text>
        </View>
       <FlatList
          style={{marginTop: 15}}
          data={toolData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        </ImageBackground>
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