import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={{fontSize: 18}}>Hello world</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
