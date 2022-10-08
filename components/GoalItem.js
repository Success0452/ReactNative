import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props){
    return <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
         <View style={styles.styleList}> 
    <Text style={styles.textStyleList}> {props.value} </Text> 
    </View>
    </Pressable>
}

export default GoalItem;

const styles = StyleSheet.create({
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
})