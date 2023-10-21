import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import FetchQuestion from '../hooks/fetching';
import styles from '../styles/homeScreen';
import Card from '../hooks/card';
import { db } from '../../firebase/config';
import { ref, onValue } from "firebase/database";


const HomeScreen = () => {

    const [question, setQuestion] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, 'questions/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const newQuestions = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key]
                }));
                // console.log(newQuestions);
                setQuestion(newQuestions);
            }
        })

        // Don't forget to remove the listener when the component unmounts.

    }, []);

    
   
    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                data={question}
                // keyExtractor={({ question }) => question}
                renderItem={({ item }) => (
                    <View style={styles.test}>
                        
                        <FetchQuestion question={item.id} answer={item.answers} incorrect_answers={item.inccAnswer} />
                    </View>
                )}
            />


        </SafeAreaView>



    );
}

export default HomeScreen;

