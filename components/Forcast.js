import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forcast extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textMain}>{this.props.main}</Text>
        <Text style={styles.textDescription}>{this.props.description}</Text>
        <View style={styles.flexTemp}>
          <Text style={styles.textTemp}>{this.props.temp}</Text>
          <Text style={styles.TextSymboltemp}> °C</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textMain: {
    fontSize: 40,
    marginTop: 10,
    flex: 1,
    color: "white",
    textAlign: "center"
  },
  textDescription: {
    fontSize: 20,
    flex: 1,
    color: "white",
    textAlign: "center"
  },
  textTemp: {
    fontSize: 30,
    color: "white"
  },
  flexTemp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  TextSymboltemp: {
    fontSize: 20,
    color: "white",
    marginTop: 5
  }
});
