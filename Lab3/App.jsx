"use client";

import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';




function App() {

  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <View>
        <ToDoForm addTask = {addTask}/>
        <ToDoList tasks = {tasks}/>
      </View>
    </SafeAreaView>
  );
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

export default App;
