import * as React from 'react';
import { Text, View ,StyleSheet,SafeAreaView,FlatList} from 'react-native';
import { useState,useEffect } from 'react';
import {collection, onSnapshot} from "firebase/firestore"
import {db} from "../../config/firebase"
import Card from '../hooks/card';


export default function DetailsScreen({ navigation }) {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading ] = useState(false)

    useEffect(() =>{
        setLoading(true);
        const questionsRef = collection(db,"questions")
        onSnapshot(questionsRef,(snapshot) =>{
          let questionsList = []  
          snapshot.docs.map((doc) => questionsList.push({...doc.data(), id: doc.id}))
          setQuestions(questionsList);
          setLoading(false)

        })
    },[])

    const renderItem = ({item}) => (

        <View>   
             <Card question={item.question} answer={item.answers}  ></Card>
        </View>
       
    )

  //  console.log(questions)
    return (
    <View style={styles.conatiner}>
       <FlatList
       data={questions}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       />
   
    </View>
    );
  }
  const styles = StyleSheet.create({

    conatiner:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        marginTop: 50
    },
    text:{
        fontSize:26,
        fontWeight: 'bold',

    }
})