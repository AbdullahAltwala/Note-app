import 'react-native-gesture-handler'
import * as React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import styles from '../styles/naviations';

import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';
import SettingsScreen from '../screens/SettingsScreen';
const homeName = "Home"
const notesName = "Notes"
const settingsScreen = "Settings"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()




export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <NavigationContainer style={styles.container}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Weclome" component={Weclome} />
                    <Stack.Screen name="Auth" component={Auth} />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>


    )
}

function Weclome({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.btn} title='weclome' onPress={() => navigation.navigate("Auth")}>
                <View style={styles.btnView}><Text style={styles.btnText}>Weclome</Text></View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

function Auth() {
    return (

        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={
                ({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn == homeName) {
                            iconName = (focused ? 'home' : 'home-outline')

                        } else if (rn == notesName) {
                            iconName = (focused ? 'list' : 'list-outline')

                        } else if (rn == settingsScreen) {
                            iconName = (focused ? 'settings' : 'settings-outline')
                        }
                        return <Ionicons name={iconName} size={25} color={color} />
                    },
                    tabBarStyle: {
                        height: 65
                    },
                    tabBarActiveTintColor: '#465bd8',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 }


                })}



        >

            <Tab.Screen name={notesName} component={NotesScreen} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={settingsScreen} component={SettingsScreen} />
        </Tab.Navigator>

    );
}
