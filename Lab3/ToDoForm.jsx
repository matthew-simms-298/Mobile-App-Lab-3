"use client";

import React from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, View } from "react-native";



function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');
    return (
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add Task" onPress={() => addTask(taskText)} />
      </View>     
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    color: 'red'
  },
  text: {
    color: 'red',
    fontSize: 30
  },
  textBlue: {
    color: 'blue',
    fontSize: 30
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
})

export default ToDoForm;