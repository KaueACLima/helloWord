import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Evento extends React.Component {
  state = {
    input: 'O	React	Native	é	demais!',
  };

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.font30}>{this.state.input}</Text>
        <TextInput
        value={this.state.input}
        style={estilos.input}
        onChangeText={(input)	=>	this.setState({input})}>
        </TextInput>
      </View>
    );
  }
}

export default Evento;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 300,
    FontSize: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  fontSiza30: {
    fontSize: 30,
  },
});
