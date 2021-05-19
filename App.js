import React from 'react';
import { View } from 'react-native';
import styles from './src/Styles';
import TaskInput from './src/TaskInput';
import TaskList from './src/TaskList';

const App = () => (
  <View style={styles.App}>
    <TaskInput />
    <TaskList />
  </View>
);

export default App;