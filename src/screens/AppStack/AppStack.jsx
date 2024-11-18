import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Logo from './../../assets/logo.png'
import WelcomePage from '../../components/welcomePage'
import PromptGenerator from '../../components/prompt_generator'
import Dictionary from '../../components/dictionary'
import GrammarChecker from '../../components/grammar_checker';
import GeneralSearch from '../../components/general_search';
import RhymeGenerator from '../../components/rhyme_generator';
import Thesaurus from '../../components/thesaurus';
import WordGenerator from '../../components/word_generator';
import SpellCheck from '../../components/spell_check';

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
                    backgroundColor: "#222222"
                },
                drawerLabelStyle: {
                    color: "white",
                    fontSize: 26,
                    fontFamily: "OswaldVariable"
                },
                drawerActiveBackgroundColor: "#CD7DCD",
                drawerActiveTintColor: 'green',
                drawerInactiveTintColor: 'yellow'
            }}
        >          
            <Drawer.Screen name="Home" component={WelcomePage} />
            <Drawer.Screen name="Dictionary" component={Dictionary} />
            <Drawer.Screen name="Grammar Checker" component={GrammarChecker} />
            <Drawer.Screen name="General Search" component={GeneralSearch} />
            <Drawer.Screen name="Prompt Generator" component={PromptGenerator} />
            <Drawer.Screen name="Rhyme" component={RhymeGenerator} />
            <Drawer.Screen name="Thesaurus" component={Thesaurus} />
            <Drawer.Screen name="Word Generator" component={WordGenerator} />
            <Drawer.Screen name="Spell Check" component={SpellCheck} />
        </Drawer.Navigator>
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