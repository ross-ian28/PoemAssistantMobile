import { Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
import { useNavigation, DrawerActions } from '@react-navigation/native'; 

import Logo from './../../assets/logo.png'
import WelcomePage from '../../components/welcomePage'
import PromptGenerator from '../../components/promptGenerator'
import Dictionary from '../../components/dictionary'

export default function AppStack({  }) {  
    const navigation = useNavigation();   
    return (
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
                    fontSize: 30,
                    color: "#CD7DCD",
                },
                headerRight: () => (
                    <Image
                        source={Logo}
                        style={{ width: 65, height: 65, marginRight: 22, marginBottom: 10 }}
                    />
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Ionicons name="menu" color={"white"} size={50} style={{ marginLeft: 27, marginBottom: 5 }} />
                    </TouchableOpacity>
                ),
                drawerStyle: {
                    backgroundColor: "#CD7DCD"
                },
                drawerLabelStyle: {
                    color: "white"
                },
                drawerActiveBackgroundColor: '#7289DA',
                drawerActiveTintColor: '#FFFFFF',
                drawerInactiveTintColor: 'blue'
            }}
        >          
            <Drawer.Screen name="Home" component={WelcomePage} />
            <Drawer.Screen name="Dictionary" component={Dictionary} />
            <Drawer.Screen name="Grammar Checker" component={Dictionary} />
            <Drawer.Screen name="General Search" component={Dictionary} />
            <Drawer.Screen name="Prompt Generator" component={PromptGenerator} />
        </Drawer.Navigator>
    );
}