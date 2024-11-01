import { TouchableOpacity, Text, View, Button } from 'react-native';
import { useState } from 'react';
import InputSpinner from "react-native-input-spinner";
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function PromptGenerator({  }) {
    const [numberOfPrompts, setNumberOfPrompts] = useState(1);
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
      try {
        const data = {
          amount: numberOfPrompts
        };
    
        const res = await axios.post('https://poem-assistant-api.onrender.com/prompt-generator', data);
        setResponse(res.data.message)
        console.log('Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return (
      <View style={{ alignItems: 'center', backgroundColor: "black", height: "100%" }}>
        <View style={{display: "flex", alignItems: "center", marginTop: 30}}>
          <Text style={{ fontSize: 36, color: "white"}}>Prompt Generator</Text>
          <Text style={{ marginTop: 5, color: "white"}}>How many prompts would you like to generate?</Text>
        </View>
        <View style={{marginTop: 35, alignItems: "center"}}>
          <InputSpinner
            width={250}
            max={10}
            min={1}
            step={1}
            color={"#9370DB"}
            colorMax={"#8A2BE2"}
            colorMin={"#BA55D3"}
            textColor={"white"}
            fontSize={36}
            value={numberOfPrompts}
            onChange={(num) => {
             setNumberOfPrompts(num)
            }}
          />
          
          <View style={{marginTop: 20}}>
            <TouchableOpacity onPress={() => { handleSubmit() }} style={{ borderRadius: 30, borderWidth: 2, padding: 15, width: 150, alignItems: "center", borderColor: "white" }}>
              <Text style={{color: "white", fontSize: 18}}>Submit</Text>
            </TouchableOpacity>  
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <View style={{height: 300, width: 350, backgroundColor: "tan"}}>
            <View>
              <Text>{response}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }