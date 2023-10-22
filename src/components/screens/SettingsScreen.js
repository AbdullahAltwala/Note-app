import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState(["", "", "", ""]);
    const [correctAnswer, setCorrectAnswer] = useState(""); // Initialize to an empty string
    const questionsRef = collection(db, "questions");

    const handleSaveQuestion = async () => {
        try {
            if (!question || choices.some(choice => !choice) || !correctAnswer) {
                alert("Please fill in all fields and select the correct answer.");
                return;
            }

            const newQuestion = {
                question,
                choices,
                correctAnswer,
            };

            // Save the new question to Firebase Firestore
            await addDoc(questionsRef, newQuestion);

            // Reset the form after successful submission
            setQuestion("");
            setChoices(["", "", "", ""]);
            setCorrectAnswer("");

            // Provide feedback to the user
            alert("Question saved successfully!");
        } catch (error) {
            console.error("Error saving question: ", error);
            alert("Error saving the question. Please try again.");
        }
    };

    const navigation = useNavigation();

    const navigateToNotesScreen = () => {
        navigation.navigate('Quiz'); // Replace 'Notes' with the actual name of the NotesScreen route
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create a Question</Text>

            <TextInput
                placeholder="Enter your question"
                value={question}
                onChangeText={text => setQuestion(text)}
                style={styles.input}
            />

            {choices.map((choice, index) => (
                <TextInput
                    key={index}
                    placeholder={`Choice ${index + 1}`}
                    value={choice}
                    onChangeText={text => {
                        const updatedChoices = [...choices];
                        updatedChoices[index] = text;
                        setChoices(updatedChoices);
                    }}
                    style={styles.input}
                />
            ))}

            <Text>Enter the correct answer:</Text>
            <TextInput
                placeholder="Correct Answer"
                value={correctAnswer}
                onChangeText={text => setCorrectAnswer(text)}
                style={styles.input}
            />

            <Button title="Submit" onPress={handleSaveQuestion} />

            <TouchableOpacity onPress={navigateToNotesScreen} style={styles.button}>
                <Text style={styles.buttonText}>Go to the Quiz</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        margin: 5,
        padding: 5,
        width: '80%',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:20,
    },
});