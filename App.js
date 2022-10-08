import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components importing
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText){ setCourseGoals(
    currentCourseGoals => [...currentCourseGoals, {text: enteredText, id: Math.random().toString()}])
    endAddGoalHandler();
  }

 const onDeleteHandler = (id) => {
  setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) => goal.id != id)
  })
 }

  return (
   <>
   <StatusBar style='auto'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startAddGoalHandler} color='red'/>
    {modalIsVisible ? <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancelModal={endAddGoalHandler}/> : null}
     <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return <GoalItem value={itemData.item.text} onDeleteItem={onDeleteHandler} id={itemData.item.id}/>
      }} 
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => { return item.id}}
      alwaysBounceVertical={false}/>
     </View>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer:{
    flex: 4
  },
});
