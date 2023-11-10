import React from "react";

function ToDoForm() {
    return (
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>
    )
}

export default ToDoForm;