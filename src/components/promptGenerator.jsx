import { TouchableOpacity, Text, View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';
import InputSpinner from "react-native-input-spinner";
import axios from 'axios';
import Backdrop from './../assets/images/purple_victorian_background.jpg'
import LaceBackdrop from './../assets/images/white-lace-backdrop.png'
import LaceBorder from './../assets/images/white-lace-border.png'
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
      <View style={{ alignItems: 'center', height: "100%" }}>
        <ImageBackground style={{flex: 1, alignItems: "center", width: "100%", height: "100%"}} source={Backdrop}>

        <View style={{display: "flex", alignItems: "center", marginTop: 20}}>
          <Text style={{ fontSize: 36, color: "white", fontFamily: "OswaldVariable"}}>Prompt Generator</Text>
          <Text style={{ fontSize: 18, color: "white", fontFamily: "OswaldVariable"}}>How many prompts would you like to generate?</Text>
        </View>
        <View style={{marginTop: 25, alignItems: "center"}}>
          <Image style={{position: "absolute", height: 115, width: 115, bottom: 50}}source={LaceBackdrop}/>          
          <InputSpinner
            width={300}
            max={10}
            min={1}
            step={1}
            fontFamily={"AncientMedium"}
            color={"#4B0082"}
            colorMax={"#3C1361"}
            colorMin={"#6A0DAD"}
            fontSize={45}
            value={numberOfPrompts}
            onChange={(num) => {
             setNumberOfPrompts(num)
            }}
          />
          
          <View style={{marginTop: 35}}>
            <TouchableOpacity onPress={() => { handleSubmit() }} style={{  borderWidth: 1, borderColor: "white", borderRadius: 30, backgroundColor: "black", padding: 10, width: 300, alignItems: "center" }}>
              <Text style={{color: "white", fontSize: 18, fontFamily: "OswaldVariable"}}>Submit</Text>
            </TouchableOpacity>  
          </View>
        </View>
        <View style={{display: "flex", alignItems: "center"}}>
          <Image style={{height: 450, width: 450, position: "absolute", zIndex: 10, marginLeft: -25, marginTop: -10}}source={LaceBorder} />
          <View style={{height: 375, width: 375, backgroundColor: "black", position: 'relative', marginTop: 15}}>
            <View style={{padding: 20}}>
              <ScrollView style={{height: "100%", zIndex: 10}}>
               <Text style={{fontFamily: "OswaldVariable", fontWeight: 500, lineHeight: 24, fontSize: 18, textAlign: "center", color: "white", padding: 25}}>{response}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{width: 40, height: 16, bottom: 103, left: 92, position: "absolute", backgroundColor: "black", borderWidth: 1, borderColor: "white", transform: [{ rotate: '146deg' }]}}></View>
        <Image style={{height: 110, width: 80, borderRadius: 45, position: "absolute", bottom: 5, left: 20, borderWidth: 1, borderColor: "white"}}source={require('./../assets/images/EdgarAllan.webp')} />
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({

  });