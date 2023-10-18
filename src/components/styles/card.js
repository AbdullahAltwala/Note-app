import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // for Android
        width:"97%",
        height:300
      },
      cardText: {
        fontSize: 18,
        textAlign: 'center',
      },
      showAnswerButton: {
        backgroundColor: '#465bd8',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width:"80%",
        
        
      },
      showAnswerButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        
      },
      favoriteButton: {
        alignItems: 'center',
        alignSelf:"center",
        marginTop: 10,
        marginLeft:20,
      },
      row:{
        flexDirection:"row",
        justifyContent:'center',
        
      },
      box:{
        flex:1,
        margin:10,
        
      },
      Text:{
        fontSize:20,
      },
      hidden:{
        color:"white"
      }

  });
  export default styles