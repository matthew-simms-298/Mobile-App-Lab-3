/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const [tasks, setTasks] = useState();


function App() {

  setTasks(tasks = [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ])
  
  let condition = false;

  let dynamicStyles = condition ? styles.text : styles.textBlue;

  return (
    <SafeAreaView>
      <ToDoList tasks ={setTasks}/>
      <ToDoForm/>
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
