import { Image, TouchableOpacity, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Logo from './../../assets/logo.png'
import WelcomePage from '../../components/welcomePage'
import PromptGenerator from '../../components/promptGenerator'

export default function AppStack({}) {    
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerTitle: 'Poem Assistant',
                    headerStyle: {
                        backgroundColor: "#36454F",
                        height: 130
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#8B6F47',
                    },
                    headerRight: () => (
                       <Image
                          source={Logo}
                          style={{ width: 70, height: 70, marginRight: 28, marginBottom: 10 }}
                       />
                    )
                }}
            >          
                <Drawer.Screen name="Home" component={WelcomePage} />
                <Drawer.Screen name="Prompt Generator" component={PromptGenerator} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}