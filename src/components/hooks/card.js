import React, { useState } from 'react';
import { View, Text, TouchableOpacity,  } from 'react-native';
import styles from '../styles/card';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library

const Card = ({ question, answer,questionType }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ismulti,setmulti] = useState(true)
  

   
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>
        {showAnswer ? answer : question}
      
      </Text>
     <View style={styles.box}><Text style={styles.Text}> {questionType}</Text></View>
      <View style={styles.row}>
      <TouchableOpacity
        onPress={() => {setShowAnswer(!showAnswer)}}
        style={[styles.showAnswerButton]}
      >
        
        <Text style={[styles.showAnswerButtonText]}>
          {showAnswer ? 'Show Question' : 'Show Answer'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={styles.favoriteButton}
      >
        <Icon name={isFavorite ? 'heart' : 'heart-o'} size={30} color="red" />
      </TouchableOpacity>
      </View>
    </View>
  );
};



export default Card;
