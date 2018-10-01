import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Forcast from "./Forcast";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forcast: {
        main: '-',
        description: '-',
        temp:  0
      }
    };
  }
  fetchData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.props.zipCode
      },th&units=metric&AppID=fd68c0f2039c5a25f666a9ff374bc93e`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          forcast: {
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };
  componentDidMount = () => this.fetchData();
  componentDidUpdate = (prevProps) => {
    if(prevProps.zipCode !== this.props.zipCode){
      this.fetchData()
    }
  }
  render() {
    return (
      <View style={styles.top}>
      <View>
        <ImageBackground source={require("../1.jpeg")}style={styles.backdorp}>
            <Text style={styles.text}>ZipCode is {this.props.zipCode}</Text>
            <Forcast {...this.state.forcast} />
       
        </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0
  },
  top: {
    backgroundColor: "black",
    flexDirection: "column",
    opacity: 0.4,

  },
  backdorp: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: "white",
    textAlign: "center"
  }
});