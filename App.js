/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import SVG, { G, Circle } from "react-native-svg";

const showEvent = message => {
  console.log(message);
  // Alert.alert("Touch handled!", message, [{ text: "OK" }], {
  //   cancelable: false
  // });
};

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Circle</Text>
        <SVG width="100" height="100">
          <G>
            <Circle
              onPressIn={() => {
                showEvent("circle onPressIn");
              }}
              onPress={() => {
                showEvent("circle onPress");
              }}
              onPressOut={() => {
                showEvent("circle onPressOut");
              }}
              cx="50"
              cy="50"
              r="40"
              stroke="green"
              strokeWidth="4"
              fill="yellow"
            />
          </G>
        </SVG>

        <Text>Group</Text>
        <SVG width="100" height="100">
          <G
            onPressIn={() => {
              showEvent("group onPressIn");
            }}
            onPress={() => {
              showEvent("group onPress");
            }}
            onPressOut={() => {
              showEvent("group onPressOut");
            }}
          >
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="green"
              strokeWidth="4"
              fill="yellow"
            />
          </G>
        </SVG>

        <Text>Circle onPress</Text>
        <SVG width="100" height="100">
          <G>
            <Circle
              onPress={() => {
                showEvent("circle onPress");
              }}
              cx="50"
              cy="50"
              r="40"
              stroke="green"
              strokeWidth="4"
              fill="yellow"
            />
          </G>
        </SVG>
        <Text>Circle onPressIn + onPress</Text>
        <SVG width="100" height="100">
          <G>
            <Circle
              onPressIn={() => {
                showEvent("circle onPressIn");
              }}
              onPress={() => {
                showEvent("circle onPress");
              }}
              cx="50"
              cy="50"
              r="40"
              stroke="green"
              strokeWidth="4"
              fill="yellow"
            />
          </G>
        </SVG>
        <Text>Circle onPressOut</Text>
        <SVG width="100" height="100">
          <G>
            <Circle
              onPressOut={() => {
                showEvent("circle onPressOut");
              }}
              cx="50"
              cy="50"
              r="40"
              stroke="green"
              strokeWidth="4"
              fill="yellow"
            />
          </G>
        </SVG>
      </View>
    );
  }
}
