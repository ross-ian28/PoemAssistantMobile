import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function PromptGenerator({  }) {
    const [promptText, setPromptText] = useState("");

    return (
      <View style={{ alignItems: 'center', backgroundColor: "black", height: "100%" }}>
        <View style={{display: "flex", alignItems: "center", marginTop: 30}}>
          <Text style={{ fontSize: 36, color: "white"}}>Dictionary</Text>
          <Text style={{ marginTop: 5, color: "white"}}>What word would you like defined?</Text>
        </View>
        <View style={{marginTop: 20, alignItems: "center"}}>
          <TextInput 
            style={{ borderRadius: 30, borderColor: "white", textAlign: "center", borderWidth: 1, height: 35, width: 250}}
            onChangeText={newText => setPromptText(newText)}
            value={promptText}
          />
            <View style={{marginTop: 10}}>
                <TouchableOpacity onPress={() => { handleSubmit() }} style={{ borderRadius: 30, borderColor: "white", borderWidth: 2, padding: 10, width: 100, alignItems: "center", marginTop: 15 }}>
                    <Text style={{color: "white"}}>Submit</Text>
                </TouchableOpacity>  
            </View>     
        </View>
      </View>
    );
  }