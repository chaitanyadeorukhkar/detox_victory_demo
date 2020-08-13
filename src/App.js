import React from 'react';
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';
import Chart from './Chart';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.center}>
          <TextInput testID="text-input" style={styles.textInput} />
          <Chart />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    width: 300,
    backgroundColor: 'rgb(214, 233, 255)',
  },
});

export default App;
