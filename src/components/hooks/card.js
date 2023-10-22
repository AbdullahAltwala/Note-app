import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/card';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Card = ({ question, answer, choices, questionType, id }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false); // State for tracking deletion

  const handleDelete = async () => {
    // Display a confirmation dialog before deleting
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              // Delete the item from the database
              await deleteDoc(doc(db, 'questions', id));

              // Set the isDeleted state to true to remove the item from the UI
              setIsDeleted(true);
            } catch (error) {
              console.error('Error deleting item:', error);
            }
          },
        },
      ]
    );
  };

  return isDeleted ? null : ( // Return null if the item is deleted
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>
        {showAnswer ? answer : question}
      </Text>
      <View style={styles.box}>
        <Text style={styles.Text}>{questionType}</Text>
      </View>
      {choices && (
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>Choices:</Text>
          {choices.map((choice, index) => (
            <Text key={index} style={styles.choiceText}>
              {`${index + 1}. ${choice}`}
            </Text>
          ))}
        </View>
      )}
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            setShowAnswer(!showAnswer);
          }}
          style={styles.showAnswerButton}
        >
          <Text style={styles.showAnswerButtonText}>
            {showAnswer ? 'Show Question' : 'Show Answer'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.favoriteButton}>
          <FontAwesome name="trash" size={30} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
