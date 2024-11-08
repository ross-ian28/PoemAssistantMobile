import { Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Logo from './../../assets/logo.png'
import WelcomePage from '../../components/welcomePage'
import PromptGenerator from '../../components/promptGenerator'
import Dictionary from '../../components/dictionary'

export default function AppStack({  }) {  
    const navigation = useNavigation();   
    const [fontsLoaded] = useFonts({
        'AncientMedium': require('./../../assets/fonts/AncientMedium.ttf'),
        'OswaldVariable': require('./../../assets/fonts/OswaldVariable.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTitle: 'Poem Assistant',
                headerStyle: {
                    backgroundColor: "black",
                    height: 130,
                    borderBottomColor: "black"
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 40,
                    color: "#CD7DCD",
                    fontFamily: "AncientMedium",
                    marginBottom: 10
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