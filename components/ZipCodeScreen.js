import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableHighlight
} from "react-native";

const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
  { place: "Chandee", code: "80250" },
  { place: "Nakhon Sri Thammarat", code: "80000" }
];

const ZipItem = ({ place, code, navigate }) => (
  <TouchableHighlight onPress={() => navigate("Weather", { zipCode: code })}>
    <View style={styles.zipItem}>
      <Text style={styles.zipPlace}>{place}</Text>
      <Text style={styles.zipCode}>{code}</Text>
    </View>
  </TouchableHighlight>
);

const _KeyExtractor = item => item.code;

export default class ZipCodeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text>Choose a zip code</Text>
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={availableZipItems}
          keyExtractor={_KeyExtractor}
          renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  zipItem: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "row"
  },
  zipPlace: {
    flex: 2,
    textAlign: "center"
  },
  zipCode: { flex: 1, textAlign: "center" }
});