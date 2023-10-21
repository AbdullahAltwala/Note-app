import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, } from 'react-native';
import { useState, useEffect } from 'react';
import { ref, set, update, onValue, get, database, child, push, remove } from "firebase/database";
import { db } from '../../firebase/config';




export default function SettingsScreen() {

    const [question, setquestion] = useState('');
    const [ans, setans] = useState('')

    function deleteData() {
        remove(ref(db, 'questions/' + question))
            .then(() => {
                alert(' data updated');
            })
            .catch((error) => {
                alert(error)
            })
    }

    function read() {


        const starCountRef = ref(db, 'questions/' + question);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setans(data.answers)

        });
    }
    useEffect(() => {

        read();
    }, [])
    function createQuestion(type) {


        //  const questionId = push(child(ref(database), 'questions')).key;
        if (type == 'set') {
            set(ref(db, 'questions/' + question), {
                answers: ans,
                // profile_picture : imageUrl

            }).then(() => {
                alert(' data submitted');
            })
                .catch((error) => {
                    alert(error)
                })
        }

        if (type == 'update') {
            update(ref(db, 'questions/' + question), {
                answers: ans,
                // profile_picture : imageUrl
            }).then(() => {
                alert(' data updated');
            })
                .catch((error) => {
                    alert(error)
                })
        }
    };
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>Enter Question</Text>

            <TextInput value={question} onChangeText={(question) => { setquestion(question) }} placeholder='question' style={styles.input} />
            <TextInput value={ans} onChangeText={(ans) => { setans(ans) }} placeholder='answers' style={styles.input} />
            <View style={styles.btn}><Button onPress={() => createQuestion('set')} title='Submit Data' /></View>
            <View style={styles.btn} ><Button onPress={() => createQuestion('update')} title='Update Data' /></View>


            <View style={styles.btn} ><Button onPress={() => read()} title='Read Data' /></View>
            <View style={styles.btn} ><Button onPress={() => deleteData()} title='Delete Data' /></View>

        </View>
    );
}
const styles = StyleSheet.create({

    conatiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',

    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    btn: {
        margin: 10,
    }
})