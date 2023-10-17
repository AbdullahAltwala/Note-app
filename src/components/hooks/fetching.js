

import  React,{useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View } from 'react-native';
import styles from '../styles/homeScreen';
import Card from '../hooks/card';
//this line for identifying some wierd words in api fetches
let expression = /&quot;|&#039;|&Uumll;|&iacute;|&amp;'/g;

export default function fetchQuestion() {
    

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
  
    const getQuestion = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        const json = await response.json();
       
        console.log(json.results)
        setData(json.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // use Effect runs at least once without calling it
    useEffect(() => {
        
      getQuestion();
    }, []);
  
    function questionType(item){
      answers= []
      answers.push(item.correct_answer)
      answers.push(item.incorrect_answers[0])
      answers.push(item.incorrect_answers[1])
      answers.push(item.incorrect_answers[2])

      //this function to randomize the placment of the array 
     function shuffle(answers){
        answers.sort(() => Math.random() - 0.5);
      }

      shuffle(answers)

      if(item.type == "boolean"){
       return(
        <View>
          <Text>{item.incorrect_answers[0].replace(expression, '')}</Text>
          <Text>{item.correct_answer.replace(expression, '')}</Text>
        </View>
       
        );
      }
      else{
        return(
           <View>
          <Text>{item.incorrect_answers[0].replace(expression, '')}</Text>
            <Text>{item.incorrect_answers[1].replace(expression , '')}</Text>
            <Text>{item.incorrect_answers[2].replace(expression , '')}</Text>
            <Text>{item.correct_answer.replace(expression , '')}</Text>
        </View>
        )
      }
      
    };

    return (
     <View >
        {isLoading ? (<ActivityIndicator />) : 
        (
        <FlatList
          data={data}
          keyExtractor={({question}) => question}
          renderItem={({item}) => (
            <View style={styles.test}>
            <Text>
               {item.category}: {item.question.replace(expression , '')}{"\n"} 
            </Text>
           
            {questionType(item)}
           
            </View>
          )}
        />
      )
      }
     </View>
      
    
    );
  
}

