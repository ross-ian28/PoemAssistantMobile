import { TouchableOpacity, Text, View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';
import InputSpinner from "react-native-input-spinner";
import axios from 'axios';
import Backdrop from './../assets/images/purple_victorian_background.jpg'
import LaceBackdrop from './../assets/images/white-lace-backdrop.png'
import LaceBorder from './../assets/images/white-lace-border.png'
import LaceButton from './../assets/images/white-lace-button.png'
import LoadingButterflyIcon from './../assets/images/loading_butterfly_icon.gif'

export default function PromptGenerator({ navigation }) {
    const [numberOfPrompts, setNumberOfPrompts] = useState(1);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async () => {
      setLoading(true)
      try {
        const data = {
          amount: numberOfPrompts
        };
        const res = await axios.post('https://poem-assistant-api.onrender.com/prompt-generator', data);
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
            Prompt Generator
          </Text>
          <Text style={styles.header_sub_text}>
            How many prompts would you like to generate?
          </Text>
        </View>
        <View style={styles.form_container}>
          <Image style={styles.number_background_image} source={LaceBackdrop}/>          
          <InputSpinner
            width={300}
            max={10}
            min={1}
            step={1}
            fontFamily={"AncientMedium"}
            color={"#130124"}
            fontSize={45}
            value={numberOfPrompts}
            onChange={(num) => {
             setNumberOfPrompts(num)
            }}
            style={{marginBottom: 8}}
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
          <ScrollView style={styles.scroll_view_styling} contentContainerStyle={{ paddingBottom: 200  }}>
            <View style={styles.response_text_container}>
                <Text style={styles.response_text}>
                  {response}
                </Text>
            </View>
          </ScrollView>
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
      fontSize: 36, color: "white", fontFamily: "OswaldVariable"
    },
    header_sub_text: {
      fontSize: 18, color: "white", fontFamily: "OswaldVariable"
    },
    form_container: {
      marginTop: 20, alignItems: "center"
    },
    number_background_image: {
      position: "absolute", height: 115, width: 115, bottom: 68
    },
    button_container: {
      marginTop: 25, display: "flex", alignItems: "center"
    },
    loading_icon: {
      height: 70, width: 70
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
      flex: 1
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
      right: 10
    }
  }
);