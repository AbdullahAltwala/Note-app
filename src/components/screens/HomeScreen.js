import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default function HomeScreen() {
    return (
     <View style={styles.conatiner}>
        <Text style={styles.text}
        onPress={() => alert("this is Home screen")}
        >Home screen</Text>
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