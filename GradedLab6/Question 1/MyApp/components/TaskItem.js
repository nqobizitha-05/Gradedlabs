import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = ({ task, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        {task.description ? <Text>{task.description}</Text> : null}
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(task.id)}>
        <Text style={{ color: "white" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});

export default TaskItem;
