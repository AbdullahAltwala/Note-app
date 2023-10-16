import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';


export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.conatiner}>
        <Text style={styles.text}
        onPress={() => alert("this is Settings Screen")}
        >Settings Screen</Text>
     </View>
    );
  }
  const styles = StyleSheet.create({

    conatiner:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:26,
        fontWeight: 'bold',
 
    }
})