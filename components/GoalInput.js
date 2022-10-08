import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const [enteredText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){ setEnteredGoalText(enteredText) }

    function addGoalHandler(){
       if(enteredText.length > 0){
        props.onAddGoal(enteredText);
        setEnteredGoalText('');
       }
    }
    
    return <Modal animationType="slide" visible={props.visible}>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/Group.png')}/>
    <TextInput 
    placeholder='your course goal' 
    style={styles.textInput} 
    onChangeText={goalInputHandler}
    value={enteredText}
    />
   <View style={styles.buttonsContainer}>
   <Button title="Add Goal" onPress={addGoalHandler} color="green"/>
   <Button title="Cancel" onPress={props.onCancelModal} color="red"/>
  
   </View>

   </View>
    </Modal>
}

export default GoalInput;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: 'grey',
        borderRadius: 20,
        color: 'black',
        width: '100%',
        padding: 11
      },
      buttonsContainer:{
        marginTop: 16,
        flexDirection: 'row',
      },
      buttons: {
        width: 100,
        marginHorizontal: 8
      }
})

