module.exports = {
  root: true,
  extends: '@react-native-community',
  globals: {
    detox: true,
    device: true,
    expect: true,
    waitFor: true,
    element: true,
    by: true,
  },
  env: {
    jasmine: true,
  },
};
