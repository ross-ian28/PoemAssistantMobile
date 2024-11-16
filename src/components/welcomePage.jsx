import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Backdrop from './../assets/images/purple_victorian_background.jpg'
import LaceButton from './../assets/images/white-lace-button.png'

export default function WelcomePage({ navigation }) {
  const toolData = [
    {id: 1, tool_name: 'Dictionary'},
    {id: 2, tool_name: 'Grammar Checker'},
    {id: 3, tool_name: 'General Search'},
    {id: 4, tool_name: 'Prompt Generator'},
    {id: 5, tool_name: 'Rhyme'},
    {id: 6, tool_name: 'Thesaurus'},
    {id: 7, tool_name: 'Word Generator'},
    {id: 8, tool_name: 'Spell Check'}
  ]; 

  const renderItem = ({ item }) => (
    <View styles={{alignItems: "center"}}>
      <Image
        onPress={() => { 
          navigation.navigate(item.tool_name) 
        }}        
        style={styles.lace_button_border}
        source={LaceButton}
      />
      <TouchableOpacity style={styles.lace_button}
                onPress={() => { 
                  navigation.navigate(item.tool_name) 
                }} >
        <Text style={{ color: "white", fontSize: 24, paddingBottom: 5, fontFamily: "OswaldVariable" }}>
          {item.tool_name}
        </Text>
      </TouchableOpacity>
    </View>
  );

    return (
      <ImageBackground 
        style={{flex: 1, alignItems: "center", width: "100%", height: "100%"}}
        source={Backdrop} 
      >
        <View style={{marginTop: 5, alignItems: "center", zIndex: 1}}>
          <Text style={{fontSize: 36, color: "white", textAlign: "center"}}>Welcome to Poem Assistant!</Text>
          <Text style={{color: "white", fontSize: 18, marginTop: 5}}>Select a tool to get started</Text>
        </View>
        <FlatList
          data={toolData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ fontFamily: "OswaldVariable", zIndex: 20, width: 200}}
        />
      </ImageBackground>  
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
      height: 70
    },
    lace_button: {
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "black", 
      height: 62,
      width: 180,
      alignItems: "center",
      marginTop: 22,
      zIndex: 3,
      paddingTop: 10,
      marginLeft: 10
    },
    lace_button_border: {
      height: 80, 
      width: 220, 
      position: "absolute", 
      resizeMode: "stretch",
      bottom: -8,
      left: -10,
      zIndex: 2
    }
  });