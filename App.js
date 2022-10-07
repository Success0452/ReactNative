import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enteredText){ setEnteredGoalText(enteredText) }
  function addGoalHandler(){ setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredText]) }
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput 
      placeholder='your course goal' 
      style={styles.textInput} 
      onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={addGoalHandler}/>
     </View>
     <View style={styles.goalsContainer}>
     <ScrollView>
      {courseGoals.map((goal) => 
      (  <View style={styles.styleList} key={goal}> 
        <Text style={styles.textStyleList}> {goal} </Text> 
        </View>)
      )}
     </ScrollView>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 10,
    padding: 8
  },
  goalsContainer:{
    flex: 4
  },
  styleList: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 20
  },
  textStyleList: {
    color: 'white',
    fontSize: 16,
  }
});
