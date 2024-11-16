  // TO DO
  // Fix scroll view
  // Turn into a reusable component, then create screen to use this component for
  // Should become a number selector component 
  // Then create text input component


import { TouchableOpacity, Text, View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';
import InputSpinner from "react-native-input-spinner";
import axios from 'axios';
import Backdrop from './../assets/images/purple_victorian_background.jpg'
import LaceBackdrop from './../assets/images/white-lace-backdrop.png'
import LaceBorder from './../assets/images/white-lace-border.png'
import LaceButton from './../assets/images/white-lace-button.png'
import LoadingButterflyIcon from './../assets/images/loading_butterfly_icon.gif'
import { useFonts } from 'expo-font';

export default function PromptGenerator({  }) {
    const [numberOfPrompts, setNumberOfPrompts] = useState(1);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [fontsLoaded] = useFonts({
      'OswaldVariable': require('./../assets/fonts/OswaldVariable.ttf'),
  });
  
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
        <ImageBackground style={{flex: 1, alignItems: "center", width: "100%", height: "100%"}} source={Backdrop}>
        <View style={{display: "flex", alignItems: "center", marginTop: 5}}>
          <Text style={{ fontSize: 36, color: "white", fontFamily: "OswaldVariable"}}>Prompt Generator</Text>
          <Text style={{ fontSize: 18, color: "white", fontFamily: "OswaldVariable"}}>How many prompts would you like to generate?</Text>
        </View>
        <View style={{marginTop: 20, alignItems: "center"}}>
          <Image style={{position: "absolute", height: 115, width: 115, bottom: 68}}source={LaceBackdrop}/>          
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
          <View style={{marginTop: 25, display: "flex", alignItems: "center"}}>
            {loading ? (
              <Image
                source={LoadingButterflyIcon}
                style={{ height: 70, width: 70 }}
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
                  <Text style={{ color: "white", fontSize: 24, paddingBottom: 5, fontFamily: "OswaldVariable" }}>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        <View style={{flex: 1}}>
          <Image style={{height: 465, width: 465, position: "absolute", zIndex: 0, bottom: 92, left: -30}}source={LaceBorder} />
          <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <View style={{height: 375, width: 375, position: 'relative', marginTop: 30, paddingHorizontal: 20, overflow: "hidden"}}>
              <View>
                <Text style={{fontFamily: "OswaldVariable", fontWeight: 500, lineHeight: 26, fontSize: 18, textAlign: "center", color: "white", paddingVertical: 25}}>{response}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{width: 57, height: 10, bottom: 109, left: 89, position: "absolute", backgroundColor: "black", borderWidth: 2, borderColor: "white", zIndex: 2, transform: [{ rotate: '144deg' }]}}></View>
        <Image style={{height: 110, width: 75, borderRadius: 45, position: "absolute", bottom: 6, left: 20, borderWidth: 1, borderColor: "white"}}source={require('./../assets/images/EdgarAllan.webp')} />
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    page_container: {
      alignItems: 'center', height: "100%"
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
    }
  });

  