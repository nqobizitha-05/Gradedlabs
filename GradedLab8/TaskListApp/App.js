import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const renderItem = ({ item }) => (
    <View>
      <Text>
        {item.text}
      </Text>
    </View>
  );

  const addTask = () => {
    const trimmed = taskText.trim();
    if (trimmed === "") {
      Alert.alert("Empty Task", "Please enter a task before adding.");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      text: trimmed,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };



  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter new task" 
          value={taskText}
          onChangeText={setTaskText}
          style={styles.input}
      />

      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text>Add</Text>
      </TouchableOpacity>

      <FlatList data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text
                style={[styles.taskText, item.done && styles.taskTextDone]}
                onPress={() => toggleTask(item.id)}
            >
              {item.text}
            </Text>

            <TouchableOpacity onPress={() => toggleTask(item.id)} >
              <Text style={styles.checkbox}>
                {item.done ? "✅" : "⬜"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButton}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  inputRow: { flexDirection: 'row', marginBottom: 10 },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, padding: 8, borderRadius: 5 },
  addButton: { marginLeft: 5 },
  taskItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  taskText: { flex: 1, fontSize: 16 },
  taskTextDone: { textDecorationLine: 'line-through', color: '#888' },
  checkbox: { marginRight: 10, fontSize: 18 },
  deleteButton: { marginLeft: 10, fontSize: 18 }
});
