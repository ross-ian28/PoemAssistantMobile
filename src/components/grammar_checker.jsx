import { TouchableOpacity, Text, View, Image, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import Backdrop from './../assets/images/purple_victorian_background.jpg'
import LaceBorder from './../assets/images/white-lace-border.png'
import LaceButton from './../assets/images/white-lace-button.png'
import LoadingButterflyIcon from './../assets/images/loading_butterfly_icon.gif'

export default function GrammarChecker({ navigation }) {
    const [promptText, setPromptText] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async () => {
      // Add edge case checks: 
      setLoading(true)
      try {
        const data = {
          message: promptText
        };
        const res = await axios.post('https://poem-assistant-api.onrender.com/grammar_checker', data);
        setResponse(res.data.message)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error);
        setLoading(false)
      }
    };

    return (
      <View style={styles.page_container}>
        <ImageBackground style={styles.image_background_style} source={Backdrop}>
        <View style={styles.header_container}>
          <Text style={styles.header_text}>
            Grammar Checker
          </Text>
          <Text style={styles.header_sub_text}>
            What text would you like checked?
          </Text>
        </View>
        <View style={styles.form_container}>
          <TextInput
            value={promptText}
            onChangeText={(text) => setPromptText(text)}
            style={styles.prompt_input} 
          />
          <View style={styles.button_container}>
            {loading ? (
              <Image
                source={LoadingButterflyIcon}
                style={styles.loading_icon}
              />
            ) : (
              <>
                <Image
                  onPress={handleSubmit}
                  style={styles.lace_button_border}
                  source={LaceButton}
                />
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.lace_button}
                >
                  <Text style={styles.submit_button_text}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        <View style={styles.response_container}>
          <Image style={styles.response_border} source={LaceBorder}/>
            <View style={styles.response_text_container}>
                <Text style={styles.response_text}>
                  {response}
                </Text>
            </View>
        </View>
        <View style={styles.speech_arrow}/>
        <Image style={styles.edgar_allan_image} source={require('./../assets/images/EdgarAllan.webp')}/>
        </ImageBackground>
        <Text style={styles.back_button} 
          onPress={() => { 
            navigation.navigate("Home") 
          }}
        >
          back to home
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    page_container: {
      alignItems: 'center', 
      height: "100%"
    },
    image_background_style: {
      flex: 1, 
      alignItems: "center", 
      width: "100%", 
      height: "100%"
    },
    header_container: {
      display: "flex", 
      alignItems: "center", 
      marginTop: 5
    },
    header_text: {
      fontSize: 36, 
      color: "white", 
      fontFamily: "OswaldVariable"
    },
    header_sub_text: {
      fontSize: 18, 
      color: "white", 
      fontFamily: "OswaldVariable"
    },
    form_container: {
      marginTop: 20, 
      alignItems: "center"
    },
    prompt_input: {
      borderColor: "white",      
      borderWidth: 2,                               
      color: "white",
      height: 50,
      width: 300,
      textAlign: "center",
      fontSize: 20,
      fontFamily: "OswaldVariable",
      paddingBottom: 5
    },
    button_container: {
      marginTop: 25, 
      display: "flex", 
      alignItems: "center"
    },
    loading_icon: {
      height: 70, 
      width: 70
    },
    lace_button: {
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "black",
      height: 70,
      paddingVertical: 15,
      width: 180,
      alignItems: "center"
    },
    lace_button_border: {
      height: 90, 
      width: 220, 
      position: "absolute", 
      bottom: -10, 
      resizeMode: "stretch"
    },
    submit_button_text: {
      color: "white", 
      fontSize: 24, 
      paddingBottom: 5, 
      fontFamily: "OswaldVariable"
    },
    response_container: {
      flex: 1,
      justifyContent: "center"
    },
    response_border: {
      height: 465, 
      width: 465, 
      position: "absolute", 
      zIndex: 0, 
      bottom: 94, 
      left: -45
    },
    scroll_view_styling: {
      overflow: "hidden", 
      maxHeight: 400, 
      maxWidth: 400, 
      marginTop: 16
    },
    response_text_container: {
      height: 375, 
      width: 375, 
      position: 'relative', 
      marginTop: 30, 
      paddingHorizontal: 20
    },
    response_text: {
      fontFamily: "OswaldVariable", 
      fontWeight: 500, 
      lineHeight: 26, 
      fontSize: 18, 
      textAlign: "center", 
      color: "white", 
      paddingVertical: 25
    },
    speech_arrow: {
      width: 57, 
      height: 10, 
      bottom: 109, 
      left: 89, 
      position: "absolute", 
      backgroundColor: "black", 
      borderWidth: 2, 
      borderColor: "white", 
      zIndex: 2, 
      transform: [{ rotate: '144deg' }]
    },
    edgar_allan_image: {
      height: 110, 
      width: 75, 
      borderRadius: 45, 
      position: "absolute", 
      bottom: 6, 
      left: 20, 
      borderWidth: 1, 
      borderColor: "white"
    },
    back_button: {
      fontFamily: "OswaldVariable", 
      fontSize: 22, 
      color: "white", 
      position: "absolute", 
      bottom: 50, 
      right: 15
    }
  }
);